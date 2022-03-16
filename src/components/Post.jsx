import React, { useState } from 'react';
import { removePost } from '../apiFunction';
import Newmessage from './Newmessage';

const Post = ({ post, index, isLoggedIn }) => {
  let token;
  if (isLoggedIn) {
    token = window.localStorage.getItem('token');
  }

  const [isReply, setReply] = useState(false);
  return (
    <div key={index} className="post">
      {' '}
      <h4>{post.title} </h4>
      {post.isAuthor === true ? (
        <div>
          <h1>WE WROTE THIS</h1>{' '}
          <button
            onClick={() => {
              removePost(post._id, token);
            }}
          >
            Delete
          </button>
        </div>
      ) : null}
      <p>
        <em>{`By ${post.author.username} on ${post.createdAt.slice(
          0,
          10
        )}`}</em>
      </p>
      <p>Location: {post.location}</p>
      <p>{post.description}</p>
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
