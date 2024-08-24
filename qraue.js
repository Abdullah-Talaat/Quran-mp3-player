// get all reciters
let qraueS = document.getElementById("qraue");
let allReciters = [];
function getAllReciters() {
  lodingSrean(true);
  axios.get(`${api}/${qura}`)
  .then((response) => {
   lodingSrean(false);
   allReciters = response.data.reciters;
   let qrN = "";
   qraueS.innerHTML = `<option value="">اختر قاراء</option>`;
   for (let i in allReciters) {
     qrN += `
      <option value="${allReciters[i].id}">${allReciters[i].name}</option>
     `;
   }
   qraueS.innerHTML = qrN;
  })
  .catch((error) => {
    lodingSrean(false);
    console.log(`error: ${error}`);
  })
}
getAllReciters();
// get all moshaf
let rwuh = document.getElementById("rwuh");
 function getAllRoualh(id) {
  lodingSrean(true);
  axios.get(`${api}/${qura}?reciter=${parseInt(id)}`)
  .then((response) => {
    lodingSrean(false);
    let moshaf = response.data.reciters[0].moshaf;
    console.log(moshaf)
    let moshafN = "";
    for (let index in moshaf) {
      moshafN += `
       <option value="${moshaf[index].id}"data-list="${moshaf[index].surah_list}"data-server="${moshaf[index].server}">${moshaf[index].name}</option>
      `
    }
    rwuh.innerHTML = moshafN;
    
    rwuh.onchange = function() {
      const selectM = rwuh.options[rwuh.selectedIndex];
      const list = selectM.dataset.list;
      const server = selectM.dataset.server;
      document.querySelector('.player-s').style.display = "none";
      document.querySelector('.player-s audio').src = '';
      getSurah(server, list)
    }
    const selectM = rwuh.options[rwuh.selectedIndex];
    const list = selectM.dataset.list;
    const server = selectM.dataset.server;
    getSurah(server, list)
  })
  .catch((error) => {
    lodingSrean(false);
    console.log(error);
  })
}
qraueS.onchange = function (){
  getAllRoualh(this.value);
  document.querySelector('.player-s').style.display = "none";
  document.querySelector('.player-s audio').src = '';
}
getAllRoualh(1);
// get all soruh
let sorahE = document.getElementById("sorah");
function getSurah(server,list) {
  lodingSrean(true);
  axios.get(`${api}/${suwar}`)
  .then((response) => {
    lodingSrean(false);
    list = list.split(',');
    let listA = [];
    for (let s in response.data.suwar) {
      for (let sa in list) {
        if (parseInt(list[sa]) == response.data.suwar[s].id) {
          listA.push(response.data.suwar[s]);
          let sorwN = "<option>أختر سوره</option>";
          for (let sau in listA) {
            let sorahId = listA[sau].id.toString().padStart(3, '0');
            sorwN += `
              <option value="${server}${sorahId}.mp3">${listA[sau].name}</option>
            `;
          }
          sorahE.innerHTML = sorwN;
        }
      }
    }
  })
  .catch((error) => {
    lodingSrean(false);
    console.log(error);
  })
}

sorahE.onchange = function() {
  document.querySelector('.player-s').style.display = "flex";
  document.querySelector('.player-s audio').src = this.value;
}