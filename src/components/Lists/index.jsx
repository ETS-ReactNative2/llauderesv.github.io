import React, { useState } from 'react';

import ListItem from './ListItem';

import './index.scss';

const List = ({ title, children, collapsible, items = [], onClick }) => {
  const [state, setState] = useState(collapsible);

  const arrayListItem = items.map((item, index) => {
    return <ListItem key={index} item={item} />;
  });

  function handleOnClickItem() {
    if (!onClick) setState(!state);
    else onClick();
  }

  return (
    <div className="lists">
      <h2
        onClick={handleOnClickItem}
        style={{ cursor: collapsible || onClick ? 'pointer' : 'cursor' }}
      >
        {title}
      </h2>
      <div className="bottom-border" />
      {arrayListItem.length > 0 && (
        <ul style={{ display: state ? 'none' : 'block' }}>{arrayListItem}</ul>
      )}
      {children}
    </div>
  );
};

export default List;
