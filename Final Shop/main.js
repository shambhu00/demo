var video = document.querySelector('.playPauseAbsolute');
var btn = document.getElementById('playPauseBtn');

function togglePlayPause() {
    if (video.paused) {
        btn.className = "svg-icon-video-pausesvg-icon-video-pause";
        video.play();
    } else {
        btn.ClassName = "svg-icon-video-play";
        video.pause();
    }
}

btn.onclick = function() {
    togglePlayPause();
}