// setting Tobin Total Wins on page load
let tobinSetWins =
  Number(localStorage.getItem('Tobin Spread Wins')) +
  Number(localStorage.getItem('Tobin OU Wins'));
document.getElementById('tobinTotalWins').value = tobinSetWins;

// setting Tobin Total Losses on page load
let tobinSetTotalLosses =
  Number(localStorage.getItem('Tobin Spread Losses')) +
  Number(localStorage.getItem('Tobin OU Losses'));
document.getElementById('tobinTotalLosses').value = tobinSetTotalLosses;

// setting Tobin Total Pushes on page load
let tobinSetTotalPushes =
  Number(localStorage.getItem('Tobin Spread Pushes')) +
  Number(localStorage.getItem('Tobin OU Pushes'));
document.getElementById('tobinTotalPushes').value = tobinSetTotalPushes;

// setting tobinUnit on page load
let tobinSetUnit = Number(localStorage.getItem('tobinUnit'));
document.getElementById('tobinUnit').value = tobinSetUnit;

// setting Tobin Spread Wins on page load
let tobinSetSpreadWins = Number(localStorage.getItem('Tobin Spread Wins'));
document.getElementById('tobinSpreadWins').value = tobinSetSpreadWins;

// setting Tobin Spread Losses on page load
let tobinSetSpreadLosses = Number(localStorage.getItem('Tobin Spread Losses'));
document.getElementById('tobinSpreadLosses').value = tobinSetSpreadLosses;

// setting Tobin Spread Pushes on page load
let tobinSetSpreadPushes = Number(localStorage.getItem('Tobin Spread Pushes'));
document.getElementById('tobinSpreadPushes').value = tobinSetSpreadPushes;

// setting Tobin OU Wins on page load
let tobinSetOUWins = Number(localStorage.getItem('Tobin OU Wins'));
document.getElementById('tobinOUWins').value = tobinSetOUWins;

// setting Tobin OU Losses on page load
let tobinSetOULosses = Number(localStorage.getItem('Tobin OU Losses'));
document.getElementById('tobinOULosses').value = tobinSetOULosses;

// setting Tobin OU Pushes on page load
let tobinSetOUPushes = Number(localStorage.getItem('Tobin OU Pushes'));
document.getElementById('tobinOUPushes').value = tobinSetOUPushes;

// setting values on page load
tobinCalcTotalWinPercentage();
tobinCalcUnitWinLoss();
tobinCalcSpreadWinPercentage();
tobinCalcOUWinPercentage();

// storing Tobin Total Wins in local and calculating
function tobinStoreTotalWins() {
  let tobinGetTotalWins = Number(
    document.getElementById('tobinTotalWins').value
  );
  localStorage.setItem('Tobin Total Wins', tobinGetTotalWins);
  tobinCalcTotalWinPercentage();
  tobinCalcUnitWinLoss();
}

// storing Tobin Total Losses in local and calculating
function tobinStoreTotalLosses() {
  let tobinGetTotalLosses = Number(
    document.getElementById('tobinTotalLosses').value
  );
  localStorage.setItem('Tobin Total Losses', tobinGetTotalLosses);
  tobinCalcTotalWinPercentage();
  tobinCalcUnitWinLoss();
}

// storing pushes in local and calculating
function tobinStoreTotalPushes() {
  let tobinGetPushes = Number(
    document.getElementById('tobinTotalPushes').value
  );
  localStorage.setItem('Tobin Total Pushes', tobinGetPushes);
}

// storing tobinUnit in local and calculating
function tobinStoreUnit() {
  let tobinGetUnit = Number(document.getElementById('tobinUnit').value);
  localStorage.setItem('tobinUnit', tobinGetUnit);
  tobinCalcUnitWinLoss();
}

// storing Tobin Spread Wins in local and calculating on input change
function tobinStoreSpreadWins() {
  let tobinGetSpreadWins = Number(
    document.getElementById('tobinSpreadWins').value
  );
  let tobinGetOUWins = Number(document.getElementById('tobinOUWins').value);
  let tobinGetTotalWins = tobinGetSpreadWins + tobinGetOUWins;
  localStorage.setItem('Tobin Spread Wins', tobinGetSpreadWins);
  localStorage.setItem('Tobin Total Wins', tobinGetTotalWins);
  document.getElementById('tobinTotalWins').value = tobinGetTotalWins;
  tobinCalcSpreadWinPercentage();
  tobinCalcTotalWinPercentage();
  tobinCalcUnitWinLoss();
}

// storing Tobin Spread Losses in local and calculating on input change
function tobinStoreSpreadLosses() {
  let tobinGetSpreadLosses = Number(
    document.getElementById('tobinSpreadLosses').value
  );
  let tobinGetOULosses = Number(document.getElementById('tobinOULosses').value);
  let tobinGetTotalLosses = tobinGetSpreadLosses + tobinGetOULosses;
  localStorage.setItem('Tobin Spread Losses', tobinGetSpreadLosses);
  localStorage.setItem('Tobin Total Losses', tobinGetTotalLosses);
  document.getElementById('tobinTotalLosses').value = tobinGetTotalLosses;
  tobinCalcSpreadWinPercentage();
  tobinCalcTotalWinPercentage();
  tobinCalcUnitWinLoss();
}

// storing Tobin Spread Pushes in local and calculating on input change
function tobinStoreSpreadPushes() {
  let tobinGetSpreadPushes = Number(
    document.getElementById('tobinSpreadPushes').value
  );
  let tobinGetOUPushes = Number(document.getElementById('tobinOUPushes').value);
  let tobinGetTotalPushes = tobinGetSpreadPushes + tobinGetOUPushes;
  localStorage.setItem('Tobin Spread Pushes', tobinGetSpreadPushes);
  localStorage.setItem('Tobin Total Pushes', tobinGetTotalPushes);
  document.getElementById('tobinTotalPushes').value = tobinGetTotalPushes;
}

// storing over under wins in local and calculating on input change
function tobinStoreOUWins() {
  let tobinGetOUWins = Number(document.getElementById('tobinOUWins').value);
  let tobinGetSpreadWins = Number(
    document.getElementById('tobinSpreadWins').value
  );
  let tobinGetTotalWins = tobinGetSpreadWins + tobinGetOUWins;
  localStorage.setItem('Tobin OU Wins', tobinGetOUWins);
  localStorage.setItem('Tobin Total Wins', tobinGetTotalWins);
  document.getElementById('tobinTotalWins').value = tobinGetTotalWins;
  tobinCalcOUWinPercentage();
  tobinCalcTotalWinPercentage();
  tobinCalcUnitWinLoss();
}

// storing over under losses in local and calculating on input change
function tobinStoreOULosses() {
  let tobinGetOULosses = Number(document.getElementById('tobinOULosses').value);
  let tobinGetSpreadLosses = Number(
    document.getElementById('tobinSpreadLosses').value
  );
  let tobinGetTotalLosses = tobinGetSpreadLosses + tobinGetOULosses;
  localStorage.setItem('Tobin OU Losses', tobinGetOULosses);
  localStorage.setItem('Tobin Total Losses', tobinGetTotalLosses);
  document.getElementById('tobinTotalLosses').value = tobinGetTotalLosses;
  tobinCalcOUWinPercentage();
  tobinCalcTotalWinPercentage();
  tobinCalcUnitWinLoss();
}

// storing over under pushes in local and calculating on input change
function tobinStoreOUPushes() {
  let tobinGetOUPushes = Number(document.getElementById('tobinOUPushes').value);
  let tobinGetSpreadPushes = Number(
    document.getElementById('tobinSpreadPushes').value
  );
  let tobinGetTotalPushes = tobinGetSpreadPushes + tobinGetOUPushes;
  localStorage.setItem('Tobin OU Pushes', tobinGetOUPushes);
  localStorage.setItem('Tobin Total Pushes', tobinGetTotalPushes);
  document.getElementById('tobinTotalPushes').value = tobinGetTotalPushes;
}

// calculate spread win percentage on change of any of the numbers
function tobinCalcSpreadWinPercentage() {
  let tobinGetSpreadWins = Number(
    document.getElementById('tobinSpreadWins').value
  );
  let tobinGetSpreadLosses = Number(
    document.getElementById('tobinSpreadLosses').value
  );
  let tobinSpreadWagers = tobinGetSpreadWins + tobinGetSpreadLosses;
  let tobinSpreadWinPercentage = (
    (tobinGetSpreadWins / tobinSpreadWagers) *
    100
  ).toFixed(2);

  if (tobinSpreadWinPercentage >= 50) {
    document.getElementById('tobinSpreadWinPercentage').style.color = 'green';
  } else {
    document.getElementById('tobinSpreadWinPercentage').style.color = 'red';
  }
  document.getElementById('tobinSpreadWinPercentage').innerHTML =
    tobinSpreadWinPercentage + '%';
}

// calculate OU win percentage on change of any of the numbers
function tobinCalcOUWinPercentage() {
  let tobinGetOUWins = Number(document.getElementById('tobinOUWins').value);
  let tobinGetOULosses = Number(document.getElementById('tobinOULosses').value);
  let tobinOUWagers = tobinGetOUWins + tobinGetOULosses;
  let tobinOUWinPercentage = ((tobinGetOUWins / tobinOUWagers) * 100).toFixed(
    2
  );

  if (tobinOUWinPercentage >= 50) {
    document.getElementById('tobinOUWinPercentage').style.color = 'green';
  } else {
    document.getElementById('tobinOUWinPercentage').style.color = 'red';
  }
  document.getElementById('tobinOUWinPercentage').innerHTML =
    tobinOUWinPercentage + '%';
}

// calculate total win percentage on change of any of the numbers
function tobinCalcTotalWinPercentage() {
  let tobinGetTotalWins = Number(
    document.getElementById('tobinTotalWins').value
  );
  let tobinGetTotalLosses = Number(
    document.getElementById('tobinTotalLosses').value
  );
  let tobinTotalWagers = tobinGetTotalWins + tobinGetTotalLosses;
  let tobinWinPercentage = (
    (tobinGetTotalWins / tobinTotalWagers) *
    100
  ).toFixed(2);

  if (tobinWinPercentage >= 50) {
    document.getElementById('tobinWinPercentage').style.color = 'green';
  } else {
    document.getElementById('tobinWinPercentage').style.color = 'red';
  }
  document.getElementById('tobinWinPercentage').innerHTML =
    tobinWinPercentage + '%';
}

// calculating total profit/loss based on tobinUnit amount
function tobinCalcUnitWinLoss() {
  let tobinGetTotalWins = Number(
    document.getElementById('tobinTotalWins').value
  );
  let tobinGetTotalLosses = Number(
    document.getElementById('tobinTotalLosses').value
  );
  let tobinUnit = document.getElementById('tobinUnit').value;

  let tobinAmountWon = tobinGetTotalWins * (tobinUnit * 0.9);
  let tobinAmountLost = tobinGetTotalLosses * tobinUnit;

  let tobinUnitWinLoss = (tobinAmountWon - tobinAmountLost).toFixed(2);
  if (tobinUnitWinLoss >= 0) {
    document.getElementById('tobinUnitSelect').style.color = 'green';
  } else {
    document.getElementById('tobinUnitSelect').style.color = 'red';
  }
  document.getElementById('tobinUnitSelect').innerHTML = '$' + tobinUnitWinLoss;
}
