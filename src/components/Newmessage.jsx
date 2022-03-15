import React,{useState} from 'react';
import { submitMessage } from '../apiFunction';

const Newmessage = ({postid}) => {
  const[message,setMessage] = useState("") 
  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault()
      submitMessage(message,window.localStorage.getItem("token"),postid)
      setMessage('')}}>
      <textarea className="replyText" value={message} onChange ={(e) =>{
        setMessage(e.target.value)
      }}></textarea>
      <button type="submit"> submit Reply</button>
      <button>Cancel Reply</button>
      </form>
    </div>
  );
};

export default Newmessage;
