import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

let initialState = { user_id: null, fullName: null };

if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState = {
      user_id: decodedToken.user_id,
      fullName: decodedToken.fullName
    };
  }
}

const AuthContext = createContext({
  user_id: null,
  fullName: null,
  login: (token) => {},
  logout: () => {}
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user_id: action.payload.user_id,
        fullName: action.payload.fullName
      };
    case "LOGOUT":
      return {
        ...state,
        user_id: null,
        fullName: null
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(token) {
    localStorage.setItem("jwtToken", token);
    const { user_id, fullName } = jwtDecode(token);
    dispatch({
      type: "LOGIN",
      payload: { user_id, fullName }
    });
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: "LOGOUT"
    });
  }

  return (
    <AuthContext.Provider
      value={{
        user_id: state.user_id,
        fullName: state.fullName,
        login,
        logout
      }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
