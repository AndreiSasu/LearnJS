var btn = document.querySelector('button');
var videoBox = document.querySelector('div');
var video = document.querySelector('video');
btn.onclick = function() {

    'showing' === videoBox.getAttribute('class') ? videoBox.setAttribute(
      'class', 'hidden') : videoBox.setAttribute('class', 'showing');
  }
  // videoBox.onclick = function() {
  //   videoBox.setAttribute('class', 'hidden');
  // };
video.onclick = function(e) {
  e.stopPropagation();
  video.play();
};
