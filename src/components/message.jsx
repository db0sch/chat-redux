import React from 'react';
import moment from 'moment';
import {hashCode} from '../helpers/stringToHex.js'
import {intToRGB} from '../helpers/stringToHex.js'
import {emojify} from 'react-emojione';
// import Emojify from 'react-emojione';


const Message = (props) => {
  const color = intToRGB(hashCode(props.message.author));
  return (
    <div className="message">
      <div className="message-header">
        <p><span className="message-sender" style={{color: `#${color}`}}>{emojify(props.message.author)}</span> - {moment(props.message.created_at).format('h:mm:ss')}</p>
      </div>
      <div className="message-content">
        <p>{emojify(props.message.content)}</p>
      </div>
    </div>
  );
};

export default Message;
