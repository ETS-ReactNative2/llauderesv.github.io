import React from 'react';
import BlogItems from '../BlogItems/BlogItems';
import Pagination from '../../Pagination/Pagination';

import '../List/List.scss';

const List = ({ list }) => {
  return (
    <div className="blog-list">
      <Pagination
        items={list}
        itemsPerPage={3}
        render={items =>
          items.map((item, id) => {
            return <BlogItems key={id} {...item} />;
          })
        }
      />
    </div>
  );
};

export default List;
