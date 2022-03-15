import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllPosts } from '../apiFunction';
import Post from './Post';

const Posts = ({ isLoggedIn }) => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      const token = window.localStorage.getItem('token');
      getAllPosts(setAllPosts, token);
      console.log('we give the token');
    } else {
      console.log('we DO NOT give the token');
      getAllPosts(setAllPosts);
    }
  }, []);

  return (
    <div>
      {' '}
      <h1>Hello this is the post container</h1>
      <input type="text" placeholder="SEARCH POSTS" />
      {allPosts.map((post, i) => {
        return <Post isLoggedIn={isLoggedIn} post={post} index={i} />;
      })}
    </div>
  );
};

export default Posts;
