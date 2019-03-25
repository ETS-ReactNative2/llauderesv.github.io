import React from 'react';
import BlogItems from '../BlogItems/BlogItems';

import Lists from '../../Lists';
import Pagination from '../../Pagination/Pagination';

import './index.scss';

const List = ({ list }) => {
  return (
    <div className="blog-list">
      <Pagination
        items={list}
        itemsPerPage={3}
        render={items =>
          items.map((item, id) => {
            const blogDateCreated = new Date(item.created).toDateString();

            return (
              <Lists
                key={id}
                onClick={() => {
                  window.location.href = item.link;
                }}
                {...item}
              >
                <small>{blogDateCreated}</small>
              </Lists>
            );
          })
        }
      />
    </div>
  );
};

export default List;
