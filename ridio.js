

document.addEventListener("DOMContentLoaded", function() {
  const audios = document.querySelectorAll("audio");
  
  audios.forEach(audio => {
    audio.addEventListener("play", function() {
      audios.forEach(otherAudio => {
        if (otherAudio !== audio && !otherAudio.paused) {
          otherAudio.pause();
          otherAudio.currentTime = 0; // إعادة تشغيله من البداية عند تشغيله مرة أخرى
        }
      });
    });
  });
});
let ridioChinnels = document.getElementById("ridioChinnels")
let searcheInp = document.getElementById("searcheInp")
let searcheBtn = document.getElementById("searcheBtn")
let list = []
function  getAllChinnels() {
  axios.get("https://mp3quran.net/api/v3/radios?language=ar")
  .then((res) => {
    list = res.data.radios
    let rii = ''
    res.data.radios.map((r) => {
      rii += `
    <div class="ridio-chinnel">
      <h2>${r.name}</h2>
      <p>${r.recent_date}</p>
      <audio src="${r.url}" controls></audio>
      <hr/>
    </div>
      `
    })
    ridioChinnels.innerHTML = rii
  }) 
}
getAllChinnels()

searcheBtn.onclick = function (){
  let rrtt = ''
  list.map((rr) => {
    if (rr.name.includes(searcheInp.value)) {
      rrtt += `
    <div class="ridio-chinnel">
      <h2>${rr.name}</h2>
      <p>${rr.recent_date}</p>
      <audio src="${rr.url}" controls></audio>
      <hr/>
    </div>
      `
    }
})
ridioChinnels.innerHTML = rrtt
}