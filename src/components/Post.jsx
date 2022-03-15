import React, { useState } from 'react';
import Newmessage from './Newmessage';

const Post = ({ post, index, isLoggedIn }) => {
  const [isReply, setReply] = useState(false);
  return (
    <div key={index} className="post">
      {' '}
      <h4>{post.title} </h4>
      {post.isAuthor === true ? <h1>WE WROTE THIS</h1> : null}
      <p>
        <em>{`By ${post.author.username} on ${post.createdAt.slice(
          0,
          10
        )}`}</em>
      </p>
      <p>{post.description}</p>
      {isLoggedIn && !post.isAuthor ? (
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
