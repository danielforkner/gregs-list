import React, { useState } from "react";
import { Link } from "react-router-dom";
import { removePost } from "../apiFunction";
import Newmessage from "./Newmessage";

const Post = ({ post, index, isLoggedIn }) => {
  let token;
  if (isLoggedIn) {
    token = window.localStorage.getItem("token");
  }

  const [isReply, setReply] = useState(false);
  return (
    <div
      key={index}
      className={post.isAuthor === true && isLoggedIn ? "myPost" : "post"}
    >
      <h4>{post.title} </h4>
      {post.isAuthor === true && isLoggedIn ? (
        <div>
          <button
            onClick={() => {
              removePost(post._id, token);
            }}
          >
            Delete
          </button>
        </div>
      ) : null}
      <p>Location: {post.location}</p>
      <div className="postbuttons">
        <Link to={`/posts/${post._id}`}>
          <button>View Post</button>
        </Link>
        {!post.isAuthor && isLoggedIn ? (
          <button
            onClick={() => {
              setReply(!isReply);
            }}
          >
            {!isReply ? "Reply" : "Cancel Reply"}
          </button>
        ) : null}
      </div>
      {isReply ? <Newmessage postid={post._id} setReply={setReply} /> : null}
    </div>
  );
};

export default Post;
