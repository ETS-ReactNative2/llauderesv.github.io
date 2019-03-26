import React from 'react';

// Components
import Lists from '../../Lists';
import Pagination from '../../Pagination/Pagination';

import './index.scss';

const BlogList = ({ list }) => {
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
                <small className="highlight-text">{blogDateCreated}</small>
              </Lists>
            );
          })
        }
      />
    </div>
  );
};

export default BlogList;
