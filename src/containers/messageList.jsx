import React, { Component } from 'react';
import Message from '../components/message.jsx'
import MessageForm from '../containers/messageForm.jsx'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.fetchMessages()
  }

  componentDidMount() {
    const intervalId = window.setInterval(this.fetchMessages, 2000);
    this.setState({intervalId: intervalId})
    // this.focusLastMessage()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel)
    }
  }

  componentDidUpdate() {
    this.focusLastMessage();
  }

  componentWillUnmount() {
    if (this.state) {
      clearInterval(this.state.intervalId);
    }
  }

  focusLastMessage = () => {
    this.messageList.scrollTop = this.messageList.scrollHeight
    console.log(this.messageList)
    console.log(this.messageList.scrollHeight)
    console.log(this.messageList.scrollTop)
  }

  fetchMessages = () => {
    this.props.fetchMessages(this.props.selectedChannel)
  }

  handleClick = () => {
    this.fetchMessages()
  }






  render() {
    return (
      <div className="messages full-height">
        <div className="channel-header">
          <h3>Channel #title</h3>
          {/*<button className="btn btn-primary" onClick={this.handleClick}>Reload</button>*/}
        </div>
        <div className="message-list" ref={(list) => { this.messageList = list; }}>
          <ul className="list-unstyled">
          {this.props.messages.map((message) => {
            return (
              <li key={message.created_at}>
                <Message  message={message}  />
              </li>
              )
          })}
          </ul>
        </div>
        <MessageForm />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators(
    { fetchMessages: fetchMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
