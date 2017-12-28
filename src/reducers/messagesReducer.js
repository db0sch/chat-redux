export default function(state, action) {
  if (state === undefined) {
    // Reducer initialisation
    return [];
  }

  const FETCH_MESSAGES = 'FETCH_MESSAGES'
  switch (action.type) {
    case FETCH_MESSAGES:
      return action.payload;
    default:
      return state;
  }
}
