export function fetchMessages(channel = 'general') {
  const url = `https://kevin-chat.herokuapp.com/${channel}/messages`
  // const url = `http://localhost:3000/${channel}/messages`
  const promise = fetch(url).then(response => response.json()).catch(error => {messages: []})
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  }
}

export function sendMessage(channel, message) {
  const url = `https://kevin-chat.herokuapp.com/${channel}/messages`
  // const url = `http://localhost:3000/${channel}/messages`;
  const promise = fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
  })
  .then(response => response.json())
  .catch(error => {messages: {}})
  return {
    type: 'POST_MESSAGE',
    payload: promise
  }
}
export function changeChannelSelection(channel) {
  return {
    type: 'SELECT_CHANNEL',
    payload: channel
  }
}
