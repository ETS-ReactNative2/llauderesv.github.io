import React from 'react';
import Item from './Item/Item';

const PageNumber = ({ items, currentPage, onClickPage }) => {
  return (
    <ul className="pagination">
      {items.map(item => {
        return (
          <Item
            key={item}
            item={item}
            currentPage={currentPage}
            onClickPage={onClickPage}
          />
        );
      })}
    </ul>
  );
};

export default PageNumber;
