import _ from 'lodash';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const localKey = 'videoplayer-current-time';

const durationCallback = ({ seconds }) => {
  localStorage.setItem(localKey, seconds);
};

const setPlayerTime = () => {
  if (!localStorage.getItem(localKey)) {
    return;
  }
  const currentVideoTime = localStorage.getItem(localKey);
  player
    .setCurrentTime(currentVideoTime)
    .then(() => {
      player.play();
    })
    .catch(error => {
      switch (error.name) {
        case 'RangeError':
          alert(
            'The time was less than 0 or greater than the video’s duration'
          );
          break;
        default:
          alert('Player Error');
          break;
      }
    });
};

window.addEventListener('load', setPlayerTime);
player.on('timeupdate', _.throttle(durationCallback, 1000));
