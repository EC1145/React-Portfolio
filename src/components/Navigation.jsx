import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <a>Contact me at ethasantana93@gmail.com</a>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
