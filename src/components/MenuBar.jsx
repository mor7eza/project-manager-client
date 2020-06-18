import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Menubar = () => {
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
      </Menu>
    </div>
  );
};

export default Menubar;
