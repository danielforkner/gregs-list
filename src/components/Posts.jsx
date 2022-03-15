import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllPosts } from '../apiFunction';
import Post from './Post';

const Posts = ({ isLoggedIn }) => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');

  useEffect(async () => {
    if (isLoggedIn) {
      const token = window.localStorage.getItem('token');
      getAllPosts(setAllPosts, token);
    } else {
      console.log('we DO NOT give the token');
      getAllPosts(setAllPosts);
    }
  }, []);

  useEffect(() => {
    setSearchResults(allPosts);
  }, [allPosts]);

  return (
    <div>
      {' '}
      <h1>Hello this is the post container</h1>
      <input
        type="text"
        placeholder="SEARCH POSTS"
        value={searchTerms}
        onChange={(e) => {
          setSearchResults(allPosts);
          setSearchTerms(e.target.value);
          const result = allPosts.filter((post, i) => {
            if (
              post.description
                .toLowerCase()
                .includes(searchTerms.toLowerCase()) ||
              post.title.toLowerCase().includes(searchTerms.toLowerCase()) ||
              post.location.toLowerCase().includes(searchTerms.toLowerCase())
            ) {
              return post;
            } else {
              null;
            }
          });
          setSearchResults(result);
          console.log('searchresults after change', searchResults);
          console.log('allPosts after change', allPosts);
        }}
      />
      {searchResults.map((post, i) => {
        return <Post isLoggedIn={isLoggedIn} post={post} index={i} />;
      })}
    </div>
  );
};

export default Posts;
