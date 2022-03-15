import React from 'react';
import { useState, useEffect } from 'react';
import { getProfile, removePost } from '../apiFunction';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const token = window.localStorage.getItem('token');
  useEffect(async () => {
    const data = await getProfile(token);
    setProfile(data.data);
  }, []);
  return (
    <div>
      <h1>My Profile</h1>
      <h1>My Messages</h1>
      {profile.messages
        ? profile.messages.map((message, i) => {
            return <div>{message.content} </div>;
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
                      removePost(post._id, token);
                    }}
                  >
                    Delete
                  </button>{' '}
                </div>
              );
            }
          })
        : null}
    </div>
  );
};

export default Profile;