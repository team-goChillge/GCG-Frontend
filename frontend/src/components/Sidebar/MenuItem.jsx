import React from "react";
import { NavItem, NavLink } from "./MenuItem.styles";

const MenuItem = ({ title }) => {
  return (
    <NavItem>
      <NavLink href="#">{title}</NavLink>
    </NavItem>
  );
};

export default MenuItem;
