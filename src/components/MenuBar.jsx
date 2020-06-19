import React, { useState, useContext } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

const Menubar = (props) => {
  const { user_id, fullName, logout } = useContext(AuthContext);

  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const onClickHandler = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu pointing secondary color="blue" size="large">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={onClickHandler}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="organizations"
          active={activeItem === "organizations"}
          onClick={onClickHandler}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="projects"
          active={activeItem === "projects"}
          onClick={onClickHandler}
          as={Link}
          to="/"
        />

        {user_id ? (
          <Menu.Menu position="right">
            <Menu.Item
              name={fullName}
              onClick={() => setActiveItem("profile")}
              as={Link}
              to="/profile"
              active={activeItem === "profile"}
            />
            <Menu.Item
              name="logout"
              onClick={() => {
                setActiveItem("login");
                logout();
              }}
              as={Link}
              to="/login"
            />
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item
              name="register"
              active={activeItem === "register"}
              onClick={onClickHandler}
              as={Link}
              to="/register"
            />
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={onClickHandler}
              as={Link}
              to="/login"
            />
          </Menu.Menu>
        )}
      </Menu>
    </div>
  );
};

export default Menubar;
