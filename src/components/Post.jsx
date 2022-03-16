import React, { useState } from "react";
import { Link } from "react-router-dom";
import { removePost } from "../apiFunction";
import Newmessage from "./Newmessage";
import Singlepost from "./Singlepost";

const Post = ({ post, index, isLoggedIn }) => {
  let token;
  if (isLoggedIn) {
    token = window.localStorage.getItem("token");
  }

  const [isReply, setReply] = useState(false);
  return (
    <div key={index} className="post">
      {" "}
      <h4>{post.title} </h4>
      {post.isAuthor === true ? (
        <div>
          <h1>WE WROTE THIS</h1>{" "}
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
      <Link to={`/posts/${post._id}`}>
        <button>View Post</button>
      </Link>
      {!post.isAuthor ? (
        <button
          onClick={() => {
            setReply(!isReply);
          }}
        >
          Reply
        </button>
      ) : null}
      {isReply ? <Newmessage postid={post._id} /> : null}
    </div>
  );
};

export default Post;
