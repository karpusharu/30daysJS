const videoPlayer = document.querySelector('.player');
const btnPlay = videoPlayer.querySelector('.player__button');
const video = videoPlayer.querySelector('.player__video');
const volume = videoPlayer.querySelector("input[name='volume']");
const playback = videoPlayer.querySelector('input[name="playbackRate"]');
const progress = videoPlayer.querySelector('.progress');
const progressBar = videoPlayer.querySelector('.progress__filled');
const btnForward = videoPlayer.querySelector('.player__button[data-skip="10"]');
const btnBack = videoPlayer.querySelector('.player__button[data-skip="-10"]');

btnForward.addEventListener('click', () => {
    video.currentTime += 10;
})
btnBack.addEventListener('click', () => {
    video.currentTime -= 10;
})

// Play - pause
function playVideo (e) {
    if(video.paused) {
        video.play();
        btnPlay.textContent = '⏸';
    } else {
        video.pause();
        btnPlay.textContent = '►';
    }
}
btnPlay.addEventListener('click',playVideo);
video.addEventListener('click', playVideo);

// Volume adjusting
volume.addEventListener('mousemove', (e) => {
    video.volume = e.target.value;
})

// Progress change
video.addEventListener('timeupdate', () => {
    const percentage = (video.currentTime / video.duration) * 100;
    progressBar.style.width = `${percentage}%`
})
progress.addEventListener('click', (e) => {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
})

// Playback speed change
playback.addEventListener('mousemove', (e) => {
    video.playbackRate = e.target.value;
})


