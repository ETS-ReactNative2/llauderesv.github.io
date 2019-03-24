import React from 'react';

import '../BlogItems/BlogItems.scss';

const BlogItems = ({ link, title, created }) => {
  return (
    <div
      className="blog-items"
      onClick={() => {
        window.location = link;
      }}
    >
      <div>
        <h2>{title}</h2>
        <small>{new Date(created).toDateString()}</small>
      </div>
      <div className="bottom-border"></div>
    </div>
  );
};

export default BlogItems;
