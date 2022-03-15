import React, { useState } from 'react';
import Newmessage from './Newmessage';

const Post = ({ post, index }) => {
  const [isReply, setReply] = useState(false);
  return (
    <div key={index} className="post">
      {' '}
      <h4>{post.title} </h4>
      <p>
        <em>{`By ${post.author.username} on ${post.createdAt.slice(
          0,
          10
        )}`}</em>
      </p>
      <p>{post.description}</p>
      <button
        onClick={() => {
          setReply(!isReply);
        }}
      >
        Reply
      </button>
      {isReply ? <Newmessage postid= {post._id}/> : null}
    </div>
  );
};

export default Post;
