import React, { Component } from 'react';

const Channel = (props) => {
  return (
    <div className="channel">
      <span className={props.selected ? "selected-channel" : ""}>#{props.channel}</span>
    </div>
  );
};

export default Channel;

