import React from "react";
import { useParams } from "react-router-dom";

const Singlepost = () => {
  const { postid } = useParams();
  return (
    <div className="singlePostContainer">
      <div>THIS IS A SINGLE POST {postid} </div>
      {/* <p>{post.description}</p>
 <p>
 <em>{`By ${post.author.username} on ${post.createdAt.slice(
   0,
   10
 )}`}</em>
</p> */}
    </div>
  );
};

export default Singlepost;
