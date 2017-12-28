export default function(state = null, action) {
  const SELECT_CHANNEL = "SELECT_CHANNEL"

  switch (action.type) {
    case SELECT_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}
