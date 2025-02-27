let livePlayer = document.getElementById("live");

function runLive(channel, name) {
  alert(`... من فضلك أنتظر لحظه يتم تشغيل قناه ${name}`)
  if (Hls.isSupported()) {
    let hls = new Hls();
    hls.loadSource(channel);
    hls.attachMedia(livePlayer);
    livePlayer.play().catch(err => console.log("فشل التشغيل:", err));
  } else if (livePlayer.canPlayType('application/vnd.apple.mpegurl')) {
    livePlayer.src = channel;
    livePlayer.play().catch(err => console.log("فشل التشغيل:", err));
  } else {
    console.log("المتصفح لا يدعم تشغيل HLS!");
  }
}
runLive('https://win.holol.com/live/quran/playlist.m3u8',"القرآن")