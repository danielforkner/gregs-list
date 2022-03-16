import React from "react";
import { useState, useEffect } from "react";
import { getProfile, removePost } from "../apiFunction";
import Newpost from "./Newpost";
import Editpost from "./Editpost";

const Profile = ({ setIsLoggedIn }) => {
  const [showEditPost, setEditPost] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const [profile, setProfile] = useState({});
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const setLogin = async () => {
      if (window.localStorage.getItem("token")) {
        await setIsLoggedIn(true);
        const token = window.localStorage.getItem("token");
        const data = await getProfile(token);
        setProfile(data.data);
      } else {
        // render "YOU ARE NOT LOGGED IN"
      }
    };
    setLogin();
  }, []);

  return (
    <div className="profileContainer">
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
      <button
        onClick={() => {
          setShowNewPost(!showNewPost);
        }}
      >
        {!showNewPost ? "CreateNewPost" : "cancel"}
      </button>
      {showNewPost ? <Newpost setShowNewPost={setShowNewPost} /> : null}
      {profile.posts
        ? profile.posts.map((post, i) => {
            if (post.active === false) {
              return;
            } else {
              return (
                <div>
                  {post.title}{" "}
                  <button
                    onClick={() => {
                      setEditPost(!showEditPost);
                    }}
                  >
                    Edit Post
                  </button>
                  {showEditPost ? <Editpost setEditPost={setEditPost} /> : null}
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
