import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, name }) => {
  return (
    <li>
      <NavLink exact to={to}>
        {name}
      </NavLink>
    </li>
  );
};

export default NavItem;
