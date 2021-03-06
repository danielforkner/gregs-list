import React, { useState } from 'react';
import { submitMessage } from '../apiFunction';

const Newmessage = ({ postid, setReply }) => {
  const [message, setMessage] = useState('');
  return (
    <div className="newMessageContainer">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitMessage(message, window.localStorage.getItem('token'), postid);
          setReply(false);
          setMessage('');
        }}
      >
        <textarea
          className="replyText"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
        <button type="submit">Submit Reply</button>
      </form>
    </div>
  );
};

export default Newmessage;
