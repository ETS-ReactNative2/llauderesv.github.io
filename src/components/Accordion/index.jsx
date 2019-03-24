import React, { useState, useEffect } from 'react';
import Arrow from '../../images/play-arrow.png';

import './index.scss';

const Accordion = ({ title, children }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2 className="header" onClick={() => setToggle(!toggle)}>
        {/* <img
          className="arrow-img"
          src={Arrow}
          alt="arrow"
          style={{
            paddingRight: '10px',
            transform: !toggle ? '' : 'rotate(90deg)',
          }}
        /> */}
        {title}
      </h2>
      <div
        className="accordion-list"
        style={{ display: !toggle ? 'none' : 'block' }}
      >
      </div>
    </div>
  );
};

export default Accordion;
