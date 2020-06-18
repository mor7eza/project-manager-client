import React, { createContext, useReducer } from "react";
import jwtDecode from "jwt-decode";

let initialState = { user_id: null };

if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState = { user_id: decodedToken.user_id };
  }
}

const AuthContext = createContext({
  user_id: null,
  login: (token) => {},
  logout: () => {}
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user_id: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        user_id: null
      };
    default:
      return state;
  }
};

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(token) {
    localStorage.setItem("jwtToken", token);
    const { user_id } = jwtDecode(token);
    dispatch({
      type: "LOGIN",
      payload: user_id
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
      value={{ user_id: state.user_id, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
