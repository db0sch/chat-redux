import messages from '../data/messages.js';

export function setMessages() {
  return {
    type: 'SET_MESSAGES',
    payload: messages
  }
}
