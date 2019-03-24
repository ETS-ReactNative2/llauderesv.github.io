import React from 'react';

const FooterLinks = ({ src, alt, link }) => {
  return (
    <li>
      <a href={link}>
        <img src={src} alt={alt} />
      </a>
    </li>
  );
};

export default FooterLinks;
