import React from 'react';

const Item = ({ item, currentPage, onClickPage }) => {
  return (
    <li
      key={item}
      onClick={() => {
        onClickPage(item);
      }}
    >
      {item === currentPage ? (
        <div className="page-number-active" />
      ) : (
        <div className="page-number-inactive" />
      )}
    </li>
  );
};

export default Item;
