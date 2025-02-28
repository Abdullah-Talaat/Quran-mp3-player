// api url
const api = "https://mp3quran.net/api/v3";
let qura = "reciters";
let suwar = "suwar";
// loding
let lodingScreanLet = document.querySelector('#lA');
function lodingSrean(show) {
  if (show && lodingScreanLet) {
    lodingScreanLet.style.display = "flex";
  } else if (!show) {
    lodingScreanLet.style.display = "none";
  }
}



document.addEventListener("DOMContentLoaded", function() {
  const audios = document.querySelectorAll("audio");
  
  audios.forEach(audio => {
    audio.addEventListener("play", function() {
      audios.forEach(otherAudio => {
        if (otherAudio !== audio) {
          otherAudio.pause();
          otherAudio.currentTime = 0; // لإعادة التشغيل من البداية عند تشغيله مرة أخرى
        }
      });
    });
  });
});


alert("تم إضافة صفحه جديده وهي صفحة الراديو" )