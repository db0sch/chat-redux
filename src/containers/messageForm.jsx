import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../actions';

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" }
  }

  componentDidMount() {
    this.focusTextInput();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const message = {
      author: this.props.currentUsername,
      content: this.state.value
    }
    this.props.sendMessage(this.props.selectedChannel, message);
    this.setState({value: ""})
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }

  render() {
    return (
      <div className="message-form" onSubmit={this.handleSubmit}>
        <form action="">
          <input type="text" className='message-input form-control' value={this.state.value} onChange={this.handleChange} ref={(input) => { this.textInput = input; }}/>
          <input type="submit" className='message-submit btn btn-danger'/>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { sendMessage: sendMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    currentUsername: state.currentUsername,
    selectedChannel: state.selectedChannel
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

