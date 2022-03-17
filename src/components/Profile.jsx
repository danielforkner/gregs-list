import React from "react";
import { useState, useEffect } from "react";
import { getProfile, removePost } from "../apiFunction";
import Newpost from "./Newpost";
import Editpost from "./Editpost";
import { Link, useHistory } from "react-router-dom";
import arrow_right from "../arrow_right.png";
import arrow_down from "../arrow_down.png";

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory();
  const [showEditPost, setEditPost] = useState(false);
  const [showNewPost, setShowNewPost] = useState(false);
  const [profile, setProfile] = useState({});
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const setLogin = async () => {
      const token = window.localStorage.getItem("token");
      const data = await getProfile(token);
      setProfile(data.data);
      console.log("our profile", data.data);
    };
    setLogin();
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      history.push("/posts");
    }
  }, [isLoggedIn]);

  return (
    <div className="profileContainer">
      <div id="profileTitle">
        <h1 id="username">{profile.username}</h1>
      </div>
      <h1>
        <img
          className="arrowRight"
          src={`${arrow_right}`}
          onClick={(e) => {
            document.querySelector(".myMessages").classList.toggle("hidden");
            if (e.target.className === "arrowRight") {
              e.target.src = arrow_down;
              e.target.className = "arrowDown";
            } else {
              e.target.src = arrow_right;
              e.target.className = "arrowRight";
            }
          }}
        />
        My Messages{" "}
      </h1>
      <div className="myMessages hidden">
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
      </div>
      <h1>
        <img
          className="arrowRight"
          src={`${arrow_right}`}
          onClick={(e) => {
            document.querySelector(".myInbox").classList.toggle("hidden");
            if (e.target.className === "arrowRight") {
              e.target.src = arrow_down;
              e.target.className = "arrowDown";
            } else {
              e.target.src = arrow_right;
              e.target.className = "arrowRight";
            }
          }}
        />
        My Inbox{" "}
      </h1>
      <div className="myInbox hidden">
        {profile.messages
          ? profile.messages.map((message, i) => {
              let userName = profile.username;
              let author = message.fromUser.username;
              if (userName !== author) {
                return (
                  <>
                    <div>{message.content} </div>
                    <Link to={`/posts/${message.post._id}`}>
                      <button>see post</button>
                    </Link>
                  </>
                );
              }
            })
          : null}
      </div>
      <h1>
        <img
          className="arrowRight"
          src={`${arrow_right}`}
          onClick={(e) => {
            document.querySelector(".myPosts").classList.toggle("hidden");
            if (e.target.className === "arrowRight") {
              e.target.src = arrow_down;
              e.target.className = "arrowDown";
            } else {
              e.target.src = arrow_right;
              e.target.className = "arrowRight";
            }
          }}
        />
        My Posts{" "}
      </h1>
      <button
        onClick={() => {
          setShowNewPost(!showNewPost);
        }}
      >
        {!showNewPost ? "CreateNewPost" : "cancel"}
      </button>
      {showNewPost ? <Newpost setShowNewPost={setShowNewPost} /> : null}
      <div className="myPosts hidden">
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
    </div>
  );
};

export default Profile;
