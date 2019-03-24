import React from 'react';
import ArrowNextImg from './arrow-next.png';
import './ArrowNext.scss';

const ArrowNext = ({ customStyle, onClick }) => {
  return (
    <div className="arrow-next" style={customStyle} onClick={() => onClick()}>
      <img className="arrow-next-img" src={ArrowNextImg} alt="arrow-next" />
    </div>
  );
};

export default ArrowNext;
