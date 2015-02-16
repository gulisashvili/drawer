module.exports = function(socket) {
	console.log('new socket connected');

	socket.on('drawing', function(data) {
		socket.broadcast.emit('is:drawing', data);
	});

	socket.on('clear:canvas', function(data) {
		socket.broadcast.emit('clear:canvas');
	});

};
