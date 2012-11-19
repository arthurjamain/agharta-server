var vlc = require('vlc')([
  '-I', 'dummy',
  '-V', 'dummy',
  '--verbose', '1',
  '--no-video-title-show',
  '--no-disable-screensaver',
  '--no-snapshot-preview',
]);
var player = vlc.mediaplayer;

exports.routes = {
    play: function(data) {
        console.log("play");
        setMedia('/projects/agharta-server/data/intro.mp3');
        player.play();
    },
    pause: function(data) {
        console.log("play")
        player.play();
    },
    stop: function(data) {
        console.log("stop");
        player.stop();
    },
    previousMedia: function(data) {
        console.log("stop");
        player.stop();
    },
    nextMedia: function(data) {
        console.log("next");
        setMedia('/projects/agharta-server/data/intro.mp3');
    },
    setMedia: function(data) {
        setMedia('/projects/agharta-server/data/intro.mp3');
    }
};

var setMedia = function setMedia(url) {
    player.media = vlc.mediaFromFile(url);
};