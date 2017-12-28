export default function(state, action) {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  const FETCH_MESSAGES = 'FETCH_MESSAGES'
  const POST_MESSAGE = 'POST_MESSAGE'
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload.messages;
    case POST_MESSAGE:
      const updatedMessages = Array.from(state);
      updatedMessages.push(action.payload);
      return updatedMessages;
    default:
      return state;
  }
}
