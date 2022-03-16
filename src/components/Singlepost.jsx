import React from "react";
import { useParams } from "react-router-dom";

const Singlepost = ({ allPosts }) => {
  const { postid } = useParams();
  const post = allPosts.filter((post) => {
    return postid === post._id;
  })[0];
  console.log(post);
  return (
    <div className="singlePostContainer">
      <div>
        {" "}
        {post.title} {postid}{" "}
      </div>
      <p>{post.description}</p>
      <p>
        <em>{`By ${post.author.username} on ${post.createdAt.slice(
          0,
          10
        )}`}</em>
      </p>
    </div>
  );
};

export default Singlepost;
