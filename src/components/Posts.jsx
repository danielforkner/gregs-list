import React from "react";
import { getAllPosts } from "../apiFunction";

const Posts = (props) => {
    getAllPosts()
  return (
    <div> <h1>Hello this is the post container</h1> 
    </div>
  );
};

export default Posts;
