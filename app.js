const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');

app.set('port', 3000);

const server = app.listen(app.get('port'), () => {
	const port = server.address().port;
	console.log('server started at port no ' + port);
})

app.use(express.static(path.join(__dirname, '/public')));

const io = socket(server);
io.on('connection', (socket) => {
	console.log('made socket connection', socket.id);
})