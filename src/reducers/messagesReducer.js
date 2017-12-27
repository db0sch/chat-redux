export default function(state, action) {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  const SET_MESSAGES = 'SET_MESSAGES'

  switch (action.type) {
    case SET_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}
