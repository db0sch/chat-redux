import React, { Component } from 'react';
import Message from '../components/message.jsx'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages();
  }

  render() {
    return (
    <div className="col-sm-5" style={{height: '100vh'}}>
      {this.props.messages.map((message) => {
        return <Message key={message.created_at} message={message} />
      })}
    </div>
 );
 }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setMessages: setMessages },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
