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