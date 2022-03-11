import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllPosts } from "../apiFunction";

const Posts = (props) => {
    const [allPosts, setAllPosts] = useState([])
    useEffect(() => {
        getAllPosts(setAllPosts)

        console.log(allPosts)
    }, [])



    return (
        <div> <h1>Hello this is the post container</h1>
        {allPosts.map((post,i)=>{
            return(
          <div key={i} className="post">  <h4>{post.title} </h4>
            <p>{post.description}</p> </div> 
            )
        })}
        </div>
    );
};

export default Posts;
