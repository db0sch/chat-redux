import React from 'react';

const Message = (props) => {
  return (
    <div className="message">
      <p>{props.message.content}</p>
      <span>by {props.message.author}</span>
      <span>on {props.message.created_at}</span>
    </div>
  );
};

export default Message;
