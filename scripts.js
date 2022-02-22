// setting wins on page load
let setWins = Number(localStorage.getItem('Wins'));
document.getElementById('wins').value = setWins;

// setting losses on page load
let setLosses = Number(localStorage.getItem('Losses'));
document.getElementById('losses').value = setLosses;

// setting pushes on page load
let setPushes = Number(localStorage.getItem('Pushes'));
document.getElementById('pushes').value = setPushes;

// storing wins in local
function storeWins() {
  let getWins = document.getElementById('wins').value;
  localStorage.setItem('Wins', getWins);
}

// storing losses in local
function storeLosses() {
  let getLosses = document.getElementById('losses').value;
  localStorage.setItem('Losses', getLosses);
}

// storing pushes in local
function storePushes() {
  let getPushes = document.getElementById('pushes').value;
  localStorage.setItem('Pushes', getPushes);
}

let totalWagers = setWins + setLosses;
let winPercentge = ((setWins / totalWagers) * 100).toFixed(2);
document.getElementById('winPercentage').innerHTML = winPercentge + '%';

if (winPercentge >= 50) {
  document.getElementById('winPercentage').style.color = 'green';
} else {
  document.getElementById('winPercentage').style.color = 'red';
}
//TODO:
// calculates the win percentage on page load. Find way to calc every time a # changes
// get $ calcs added in
// maybe add a Unit input that will calc based on input $ amount
