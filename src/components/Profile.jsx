import React from 'react';
import { useState,useEffect } from 'react';
import { getProfile } from '../apiFunction';



const Profile = () => {
  const [profile,setProfile] = useState({})
  const token = window.localStorage.getItem('token')
  useEffect(async()=> {
   const data = await getProfile(token)
 setProfile (data.data)
  },[])
  return (
    <div>
      <h1>My Profile</h1>
      <h1>My Messages</h1>
      {profile.messages ? profile.messages.map((message,i)=>{
        return(<div>{message.content} </div>)
      }):null}
      <h1>My Inbox</h1>
      {profile.messages ? profile.messages.map((message,i)=>{
        let userName = profile.username
        let author = message.fromUser.username 
        if (userName!==author){

          return(<div>{message.content} </div>)
        }
      }):null}
      <h1>My Posts</h1>
      {profile.posts ? profile.posts.map((post,i)=>{
        return(<div>{post.title} </div>)
      }):null}
    </div>
  );
};

export default Profile;
