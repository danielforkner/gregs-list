import React,{useState} from 'react';

const Newmessage = () => {
  const[message,setMessage] = useState("") 
  return (
    <div>
      <form onSubmit={(e) => {e.preventDefault()
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
