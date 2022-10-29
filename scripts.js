// setting total wins on page load
let setWins =
  Number(localStorage.getItem('Spread Wins')) +
  Number(localStorage.getItem('OU Wins'));
document.getElementById('totalWins').value = setWins;

// setting total losses on page load
let setTotalLosses =
  Number(localStorage.getItem('Spread Losses')) +
  Number(localStorage.getItem('OU Losses'));
document.getElementById('totalLosses').value = setTotalLosses;

// setting total pushes on page load
let setTotalPushes =
  Number(localStorage.getItem('Spread Pushes')) +
  Number(localStorage.getItem('OU Pushes'));
document.getElementById('totalPushes').value = setTotalPushes;

// setting unit on page load
let setUnit = Number(localStorage.getItem('Unit'));
document.getElementById('unit').value = setUnit;

// setting spread wins on page load
let setSpreadWins = Number(localStorage.getItem('Spread Wins'));
document.getElementById('spreadWins').value = setSpreadWins;

// setting spread losses on page load
let setSpreadLosses = Number(localStorage.getItem('Spread Losses'));
document.getElementById('spreadLosses').value = setSpreadLosses;

// setting spread pushes on page load
let setSpreadPushes = Number(localStorage.getItem('Spread Pushes'));
document.getElementById('spreadPushes').value = setSpreadPushes;

// setting OU wins on page load
let setOUWins = Number(localStorage.getItem('OU Wins'));
document.getElementById('OUWins').value = setOUWins;

// setting OU losses on page load
let setOULosses = Number(localStorage.getItem('OU Losses'));
document.getElementById('OULosses').value = setOULosses;

// setting OU pushes on page load
let setOUPushes = Number(localStorage.getItem('OU Pushes'));
document.getElementById('OUPushes').value = setOUPushes;

// setting values on page load
calcTotalWinPercentage();
calcUnitWinLoss();
calcSpreadWinPercentage();
calcOUWinPercentage();

// storing total wins in local and calculating
function storeTotalWins() {
  let getTotalWins = Number(document.getElementById('totalWins').value);
  localStorage.setItem('Total Wins', getTotalWins);
  calcTotalWinPercentage();
  calcUnitWinLoss();
}

// storing total losses in local and calculating
function storeTotalLosses() {
  let getTotalLosses = Number(document.getElementById('totalLosses').value);
  localStorage.setItem('Total Losses', getTotalLosses);
  calcTotalWinPercentage();
  calcUnitWinLoss();
}

// storing pushes in local and calculating
function storeTotalPushes() {
  let getPushes = Number(document.getElementById('totalPushes').value);
  localStorage.setItem('Total Pushes', getPushes);
}

// storing unit in local and calculating
function storeUnit() {
  let getUnit = Number(document.getElementById('unit').value);
  localStorage.setItem('Unit', getUnit);
  calcUnitWinLoss();
}

// storing spread wins in local and calculating on input change
function storeSpreadWins() {
  let getSpreadWins = Number(document.getElementById('spreadWins').value);
  let getOUWins = Number(document.getElementById('OUWins').value);
  let getTotalWins = getSpreadWins + getOUWins;
  localStorage.setItem('Spread Wins', getSpreadWins);
  localStorage.setItem('Total Wins', getTotalWins);
  document.getElementById('totalWins').value = getTotalWins;
  calcSpreadWinPercentage();
  calcTotalWinPercentage();
  calcUnitWinLoss();
}

// storing spread losses in local and calculating on input change
function storeSpreadLosses() {
  let getSpreadLosses = Number(document.getElementById('spreadLosses').value);
  let getOULosses = Number(document.getElementById('OULosses').value);
  let getTotalLosses = getSpreadLosses + getOULosses;
  localStorage.setItem('Spread Losses', getSpreadLosses);
  localStorage.setItem('Total Losses', getTotalLosses);
  document.getElementById('totalLosses').value = getTotalLosses;
  calcSpreadWinPercentage();
  calcTotalWinPercentage();
  calcUnitWinLoss();
}

// storing spread pushes in local and calculating on input change
function storeSpreadPushes() {
  let getSpreadPushes = Number(document.getElementById('spreadPushes').value);
  let getOUPushes = Number(document.getElementById('OUPushes').value);
  let getTotalPushes = getSpreadPushes + getOUPushes;
  localStorage.setItem('Spread Pushes', getSpreadPushes);
  localStorage.setItem('Total Pushes', getTotalPushes);
  document.getElementById('totalPushes').value = getTotalPushes;
}

// storing over under wins in local and calculating on input change
function storeOUWins() {
  let getOUWins = Number(document.getElementById('OUWins').value);
  let getSpreadWins = Number(document.getElementById('spreadWins').value);
  let getTotalWins = getSpreadWins + getOUWins;
  localStorage.setItem('OU Wins', getOUWins);
  localStorage.setItem('Total Wins', getTotalWins);
  document.getElementById('totalWins').value = getTotalWins;
  calcOUWinPercentage();
  calcTotalWinPercentage();
  calcUnitWinLoss();
}

// storing over under losses in local and calculating on input change
function storeOULosses() {
  let getOULosses = Number(document.getElementById('OULosses').value);
  let getSpreadLosses = Number(document.getElementById('spreadLosses').value);
  let getTotalLosses = getSpreadLosses + getOULosses;
  localStorage.setItem('OU Losses', getOULosses);
  localStorage.setItem('Total Losses', getTotalLosses);
  document.getElementById('totalLosses').value = getTotalLosses;
  calcOUWinPercentage();
  calcTotalWinPercentage();
  calcUnitWinLoss();
}

// storing over under pushes in local and calculating on input change
function storeOUPushes() {
  let getOUPushes = Number(document.getElementById('OUPushes').value);
  let getSpreadPushes = Number(document.getElementById('spreadPushes').value);
  let getTotalPushes = getSpreadPushes + getOUPushes;
  localStorage.setItem('OU Pushes', getOUPushes);
  localStorage.setItem('Total Pushes', getTotalPushes);
  document.getElementById('totalPushes').value = getTotalPushes;
}

// calculate spread win percentage on change of any of the numbers
function calcSpreadWinPercentage() {
  let getSpreadWins = Number(document.getElementById('spreadWins').value);
  let getSpreadLosses = Number(document.getElementById('spreadLosses').value);
  let spreadWagers = getSpreadWins + getSpreadLosses;
  let spreadWinPercentage = ((getSpreadWins / spreadWagers) * 100).toFixed(2);

  if (spreadWinPercentage >= 50) {
    document.getElementById('spreadWinPercentage').style.color = 'green';
  } else {
    document.getElementById('spreadWinPercentage').style.color = 'red';
  }
  document.getElementById('spreadWinPercentage').innerHTML =
    spreadWinPercentage + '%';
}

// calculate OU win percentage on change of any of the numbers
function calcOUWinPercentage() {
  let getOUWins = Number(document.getElementById('OUWins').value);
  let getOULosses = Number(document.getElementById('OULosses').value);
  let OUWagers = getOUWins + getOULosses;
  let OUWinPercentage = ((getOUWins / OUWagers) * 100).toFixed(2);

  if (OUWinPercentage >= 50) {
    document.getElementById('OUWinPercentage').style.color = 'green';
  } else {
    document.getElementById('OUWinPercentage').style.color = 'red';
  }
  document.getElementById('OUWinPercentage').innerHTML = OUWinPercentage + '%';
}

// calculate total win percentage on change of any of the numbers
function calcTotalWinPercentage() {
  let getTotalWins = Number(document.getElementById('totalWins').value);
  let getTotalLosses = Number(document.getElementById('totalLosses').value);
  let totalWagers = getTotalWins + getTotalLosses;
  let winPercentage = ((getTotalWins / totalWagers) * 100).toFixed(2);

  if (winPercentage >= 50) {
    document.getElementById('winPercentage').style.color = 'green';
  } else {
    document.getElementById('winPercentage').style.color = 'red';
  }
  document.getElementById('winPercentage').innerHTML = winPercentage + '%';
}

// calculating total profit/loss based on unit amount
function calcUnitWinLoss() {
  let getTotalWins = Number(document.getElementById('totalWins').value);
  let getTotalLosses = Number(document.getElementById('totalLosses').value);
  let unit = document.getElementById('unit').value;

  let amountWon = getTotalWins * (unit * 0.9);
  let amountLost = getTotalLosses * unit;

  let unitWinLoss = (amountWon - amountLost).toFixed(2);
  if (unitWinLoss >= 0) {
    document.getElementById('unitSelect').style.color = 'green';
  } else {
    document.getElementById('unitSelect').style.color = 'red';
  }
  document.getElementById('unitSelect').innerHTML = '$' + unitWinLoss;
}
