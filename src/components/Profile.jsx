import React from 'react';
import { useState, useEffect } from 'react';
import { getProfile, removePost } from '../apiFunction';
import Newpost from './Newpost';
import Editpost from './Editpost';
import { Link } from 'react-router-dom';

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showEditPost, setEditPost] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const [profile, setProfile] = useState({});
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    const setLogin = async () => {
      const token = window.localStorage.getItem('token');
      const data = await getProfile(token);
      setProfile(data.data);
    };
    setLogin();
  }, []);

  return (
    <div className="profileContainer">
      <div id="profileTitle">
        <h1>{profile.username}</h1>
      </div>
      <h1>My Messages</h1>
      {profile.messages
        ? profile.messages.map((message, i) => {
            return (
              <div>
                {message.content}
                <Link to={`/posts/${message.post._id}`}>
                  <button>see post</button>
                </Link>
              </div>
            );
          })
        : null}
      <h1>My Inbox</h1>
      {profile.messages
        ? profile.messages.map((message, i) => {
            let userName = profile.username;
            let author = message.fromUser.username;
            if (userName !== author) {
              return <div>{message.content} </div>;
            }
          })
        : null}
      <h1>My Posts</h1>
      <button
        onClick={() => {
          setShowNewPost(!showNewPost);
        }}
      >
        {!showNewPost ? 'CreateNewPost' : 'cancel'}
      </button>
      {showNewPost ? <Newpost setShowNewPost={setShowNewPost} /> : null}
      {profile.posts
        ? profile.posts.map((post, i) => {
            if (post.active === false) {
              return;
            } else {
              return (
                <div>
                  {post.title}{' '}
                  <button
                    onClick={() => {
                      setEditPost(!showEditPost);
                    }}
                  >
                    Edit Post
                  </button>
                  {showEditPost ? (
                    <Editpost setEditPost={setEditPost} POST_ID={post._id} />
                  ) : null}
                  <button
                    onClick={() => {
                      const updateProfile = async () => {
                        await removePost(post._id, token, profile);
                        setProfile(profile);
                      };
                      updateProfile();
                    }}
                  >
                    Delete
                  </button>
                </div>
              );
            }
          })
        : null}
    </div>
  );
};

export default Profile;
