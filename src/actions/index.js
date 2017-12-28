export function fetchMessages(channel = 'general') {
  console.log(channel)
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`
  const promise = fetch(url).then(response => response.json()).catch(error => [])
  console.log(promise);
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  }
}
