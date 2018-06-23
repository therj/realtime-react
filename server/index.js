const port = 8080;
const io = require('socket.io')()

io.on('connection', (client) => {
    client.on('subscribeTime', (interval) => {
        console.log('Sending at interval of ', interval)
        setInterval(() => {
            client.emit('time', (new Date()).toLocaleTimeString())
        }, interval);
    })
})

io.listen(port);
console.log(`Socket running on port ${port}`);
