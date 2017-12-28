import React from 'react';
import moment from 'moment';


const Message = (props) => {
  return (
    <div className="message">
      <div className="message-header">
        <p><span className="message-sender">{props.message.author}</span> - {moment(props.message.created_at).format('h:mm:ss')}</p>
      </div>
      <div className="message-content">
        <p>{props.message.content}</p>
      </div>
    </div>
  );
};

export default Message;
