import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Newmessage from './Newmessage';

const Singlepost = ({ allPosts, isLoggedIn }) => {
  const [isReply, setReply] = useState(false);
  const { postid } = useParams();
  const post = allPosts.filter((post) => {
    return postid === post._id;
  })[0];
  console.log(post);
  return (
    <div className="singlePostContainer">
      <div className="singlePostContent">
        <div className="singlePostHeader">
          <h1>{post.title}</h1>
          <h4>
            <em>{`By ${post.author.username} on ${post.createdAt.slice(
              0,
              10
            )}`}</em>
          </h4>
        </div>
        <p>{post.description}</p>
        {!post.isAuthor && isLoggedIn ? (
          <button
            onClick={() => {
              setReply(!isReply);
            }}
          >
            {!isReply ? 'Reply' : 'Cancel Reply'}
          </button>
        ) : null}
        {isReply ? <Newmessage postid={post._id} /> : null}
      </div>
      <div className="singlePostMessages">
        {post.messages.length > 0
          ? post.messages.map((message, i) => {
              return (
                <div key={i}>
                  <p>{message.content}</p>
                  <p>
                    <em>
                      By {message.fromUser.username} on{' '}
                      {message.updatedAt.slice(0, 10)} at{' '}
                      {message.updatedAt.slice(11, 19)}
                    </em>
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Singlepost;
