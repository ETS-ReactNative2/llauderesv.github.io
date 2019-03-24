import React from 'react';
import NavItem from './NavItem';

import './index.scss';

const Navigation = ({ links }) => {
  const navigationLinks = links.map((item, index) => {
    return <NavItem key={index} {...item} />;
  });

  return (
    <nav>
      <ul>{navigationLinks}</ul>
    </nav>
  );
};

export default Navigation;
