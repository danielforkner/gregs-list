import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllPosts } from '../apiFunction';
import Post from './Post';
import Singlepost from './Singlepost';

const Posts = ({ isLoggedIn, setIsLoggedIn, allPosts, setAllPosts }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerms, setSearchTerms] = useState('');

  // check if there is a login and getposts with token
  useEffect(() => {
    const setLogin = async () => {
      if (window.localStorage.getItem('token')) {
        await setIsLoggedIn(true);
        const token = window.localStorage.getItem('token');
        getAllPosts(setAllPosts, token);
      } else {
        getAllPosts(setAllPosts);
      }
    };
    setLogin();
  }, []);

  useEffect(() => {
    setSearchResults(allPosts);
  }, [allPosts]);

  return (
    <div className="allPosts">
      <div id="allPostsTitle">
        <h1>All Posts for: 2202-FTB-ET-WEB-FT</h1>
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
          }}
        />
      </div>
      {searchResults.map((post, i) => {
        return (
          <Post
            isLoggedIn={isLoggedIn}
            post={post}
            index={i}
            key={`searchresults-${i}`}
          />
        );
      })}
    </div>
  );
};

export default Posts;
