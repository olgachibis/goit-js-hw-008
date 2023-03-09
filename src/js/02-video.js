import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_STORAGE = 'videoplayer-current-time';

function getCurrentTime(event) {
    localStorage.setItem(KEY_STORAGE, event.seconds);
}
const isTimeVideo = localStorage.getItem(KEY_STORAGE);

if (isTimeVideo) {
  player.setCurrentTime(isTimeVideo);
}

player.on('timeupdate', throttle(getCurrentTime, 1000));
