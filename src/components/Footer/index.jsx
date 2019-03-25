import React from 'react';
import FooterLinks from './FooterLinks';

import './index.scss';

const Footer = ({ links }) => {
  const footerLinks = links.map((item, index) => {
    return <FooterLinks key={index} {...item} />;
  });

  return (
    <footer>
      <p>Hire me? Contact me on</p>
      <ul>{footerLinks}</ul>
      <p>Created by Vince Llauderes.</p>
    </footer>
  );
};

export default Footer;
