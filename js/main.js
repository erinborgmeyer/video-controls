var $video = $('#the-video');
var $btn = $('#btn-play-pause');

$btn.on('click', function () {
  if ($video.get(0).paused) {
     $btn.html('Pause');
  }  else {
     $video.get(0).pause();
      $btn.html('Play');
  }
});
      