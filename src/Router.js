var mediaPlayerController = require('./controllers/MediaPlayer'),
    io = require('socket.io');

exports.initialize = function initialize() {
    io = io.listen(27042);
    setRoutes();
};

var setRoutes = function setRoutes() {
  io.sockets.on('connection', function (socket) {
    socket.on('player.play',       mediaPlayerController.routes.play);
    socket.on('player.pause',      mediaPlayerController.routes.pause);
    socket.on('player.stop',       mediaPlayerController.routes.stop);
    socket.on('player.previous',   mediaPlayerController.routes.previousMedia);
    socket.on('player.next',       mediaPlayerController.routes.nextMedia);
  });
}