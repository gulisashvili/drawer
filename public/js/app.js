$(function() {
	init();
});

function init() {
	var socket = io();
	var canvas = this.__canvas = new fabric.Canvas('canvas', {
  	isDrawingMode: true
  });


	canvas.on('path:created', function(event) {
		var data = canvas.toDatalessJSON();
		socket.emit('drawing', data);
	});

	socket.on('is:drawing', function(data) {
		canvas.loadFromJSON(data, canvas.renderAll.bind(canvas));
	});

	$('#clear-canvas').on('click', function(e) {
		socket.emit('clear:canvas');
		canvas.clear();
	});

	socket.on('clear:canvas', function() {
		canvas.clear();
	})




}
