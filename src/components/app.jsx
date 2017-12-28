import React from 'react';
import MessageList from '../containers/messageList'
import TeamList from '../containers/teamList'
import ChannelList from '../containers/channelList'

const App = () => {
  return (
    <div className="app">
      <TeamList />
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
