import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const videoTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));

const onPlay = function (data) {
  localStorage.setItem(
    'videoplayer-current-time',
    JSON.stringify(data.seconds)
  );
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(videoTime);