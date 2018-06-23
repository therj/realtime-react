import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8080')

const subscribeToTime = cb => {
  socket.on('time', timestamp => cb(null, timestamp))
  socket.emit('subscribeTime', 1000)
}

export default subscribeToTime
