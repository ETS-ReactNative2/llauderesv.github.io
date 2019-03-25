import React, { useState, useEffect } from 'react';
import fetch from 'rss-to-json';

// Components
import withLoader from '../Loader';
import List from './List';

import './index.scss';

const BlogListWithLoader = withLoader(List);

const Blogs = _ => {
  const { blogs, isLoading, error } = useFetchMediumPost();

  return (
    <div className="blogs">
      <h1 className="page-title">Blogs</h1>
      <div className="grid-blog">
        <div className="col-1">
          {!error ? (
            <BlogListWithLoader isLoading={isLoading} list={blogs} />
          ) : (
            <h1>{error}</h1>
          )}
        </div>
      </div>
    </div>
  );
};

function fetchMediumPost() {
  return new Promise((resolve, reject) => {
    fetch.load(
      'https://cors-anywhere.herokuapp.com/https://medium.com/feed/@llauderesv',
      (error, response) => {
        const { items } = response;
        if (error) reject(error);
        else resolve(items);
      }
    );
  });
}

function useFetchMediumPost() {
  const [data, setData] = useState({
    blogs: [],
    error: null,
    isLoading: false,
  });

  useEffect(() => {
    setData({ ...data, isLoading: true });
    fetchMediumPost()
      .then(response => setData({ ...data, blogs: response, isLoading: false }))
      .catch(error => setData({ ...data, error, isLoading: false }));
  }, data);

  return data;
}

export default Blogs;
