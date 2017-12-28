import React, { Component } from 'react';
import Message from '../components/message.jsx'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

class MessageList extends Component {

  componentWillMount() {
    this.props.fetchMessages(this.props.selectedChannel)
  }

  render() {


    return (
      <div className="messages full-height">
        <div className="channel-header">
          <h3>Channel #title</h3>
        </div>
        <div className="message-list">
          <ul className="list-unstyled">
          {this.props.messages.map((message) => {
            return (
              <li key={message.created_at}>
                <Message  message={message} />
              </li>
              )
          })}
          </ul>
        </div>
        <div className="message-form">
          <form action="">
            <input type="text" className='message-input form-control'/>
            <input type="submit" className='message-submit btn btn-danger'/>
          </form>
        </div>
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
