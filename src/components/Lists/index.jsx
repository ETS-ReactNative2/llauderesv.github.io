import React, { useState, useEffect } from 'react';

import ListItem from './ListItem';

import './index.scss';

const List = ({ title, items, children, collapsible }) => {
  const [state, setState] = useState(collapsible);

  const arrayListItem = items.map((item, index) => {
    return <ListItem key={index} item={item} />;
  });

  return (
    <div className="lists">
      <h2
        onClick={() => setState(!state)}
        style={{ cursor: collapsible ? 'pointer' : 'none' }}
      >
        {title}
      </h2>
      <div className="bottom-border" />
      <ul style={{ display: state ? 'none' : 'block' }}>{arrayListItem}</ul>
      {children}
    </div>
  );
};

export default List;
