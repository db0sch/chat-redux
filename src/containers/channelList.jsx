import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Channel from '../components/channel.jsx'
import { changeChannelSelection } from "../actions"

class ChannelList extends Component {

  handleClick = (channel, event) => {
    this.props.changeChannelSelection(channel)
  }


  render() {
    return (
      <div className="channels full-height">
        <ul className="list-unstyled">
          {this.props.channels.map((channel) => {
            return (
              <li key={channel} onClick={(e) => this.handleClick(channel, e)}>
                <Channel channel={channel} selected={ channel === this.props.selectedChannel }  />
              </li>
              )
          })}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(
    { changeChannelSelection: changeChannelSelection },
    dispatch
  );
}



function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);


// export default ChannelList;
