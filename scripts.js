// setting wins on page load
let setWins = Number(localStorage.getItem('Wins'));
document.getElementById('wins').value = setWins;

// setting losses on page load
let setLosses = Number(localStorage.getItem('Losses'));
document.getElementById('losses').value = setLosses;

// setting pushes on page load
let setPushes = Number(localStorage.getItem('Pushes'));
document.getElementById('pushes').value = setPushes;

// setting unit on page load
let setUnit = Number(localStorage.getItem('Unit'));
document.getElementById('amount').value = setUnit;

// setting values on page load
calcWinPercentage();
calcUnitWinLoss();

// storing wins in local and calculating
function storeWins() {
  let getWins = Number(document.getElementById('wins').value);
  localStorage.setItem('Wins', getWins);
  calcWinPercentage();
  calcUnitWinLoss();
}

// storing losses in local and calculating
function storeLosses() {
  let getLosses = Number(document.getElementById('losses').value);
  localStorage.setItem('Losses', getLosses);
  calcWinPercentage();
  calcUnitWinLoss();
}

// storing pushes in local and calculating
function storePushes() {
  let getPushes = Number(document.getElementById('pushes').value);
  localStorage.setItem('Pushes', getPushes);
  calcWinPercentage();
  calcUnitWinLoss();
}

// storing unit in local and calculating
function storeUnit() {
  let getUnit = Number(document.getElementById('amount').value);
  localStorage.setItem('Unit', getUnit);
  calcUnitWinLoss();
}

// calculate win percentage on change of any of the numbers
function calcWinPercentage() {
  let getWins = Number(document.getElementById('wins').value);
  let getLosses = Number(document.getElementById('losses').value);
  let totalWagers = getWins + getLosses;
  let winPercentage = ((getWins / totalWagers) * 100).toFixed(2);

  if (winPercentage >= 50) {
    document.getElementById('winPercentage').style.color = 'green';
  } else {
    document.getElementById('winPercentage').style.color = 'red';
  }
  document.getElementById('winPercentage').innerHTML = winPercentage + '%';
}

// calculating profit/loss based on unit amount
function calcUnitWinLoss() {
  let getWins = Number(document.getElementById('wins').value);
  let getLosses = Number(document.getElementById('losses').value);
  let amount = document.getElementById('amount').value;

  let amountWon = getWins * (amount * 0.9);
  let amountLost = getLosses * amount;

  let unitWinLoss = (amountWon - amountLost).toFixed(2);
  if (unitWinLoss >= 0) {
    document.getElementById('unitCount').style.color = 'green';
  } else {
    document.getElementById('unitCount').style.color = 'red';
  }
  document.getElementById('unitCount').innerHTML = '$' + unitWinLoss;
}

//TODO:
// Store unit and add green/red based on profit or loss
