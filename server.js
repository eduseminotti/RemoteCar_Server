var express = require('express')
var socketIO = require('socket.io')

const PORT = process.env.PORT || 3000;
const INDEX = '/index.html';

const server = express()
    .use((req, res) => res.sendFile(INDEX, { root: __dirname }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`));

const io = socketIO(server)

io.on('connection', socket => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));

    socket.on('move', direction => console.log(direction))

    move(io)
});

function move(io) {
    setInterval(() => {
        io.emit('move', 'right')
        io.emit('move', 'left')
        io.emit('move', 'ahead')
        io.emit('move', 'back')
    }, 1000)

    
}  