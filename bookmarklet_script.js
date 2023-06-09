// Copy and paste the following code into a bookmark to change the playback speed of a video on a page.
javascript: (function changePlaybackSpeed() {
  const video = document.querySelector('video');
  if (!video) {
    alert('No video found on this page.');
    return;
  }

  let speed = prompt('Enter playback speed.', '1.8');
  if (speed === null) {
    return;
  }

  speed = parseFloat(speed);
  if (isNaN(speed) || speed <= 0) {
    alert('Invalid playback speed.\nPlease enter a positive number.');
    return;
  }

  video.playbackRate = speed;
})();
