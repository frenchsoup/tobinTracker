// setting weAreVegas Total Wins on page load
let weAreVegasSetWins =
  Number(localStorage.getItem('weAreVegas Spread Wins')) +
  Number(localStorage.getItem('weAreVegas OU Wins'));
document.getElementById('weAreVegasTotalWins').value = weAreVegasSetWins;

// setting weAreVegas Total Losses on page load
let weAreVegasSetTotalLosses =
  Number(localStorage.getItem('weAreVegas Spread Losses')) +
  Number(localStorage.getItem('weAreVegas OU Losses'));
document.getElementById('weAreVegasTotalLosses').value =
  weAreVegasSetTotalLosses;

// setting weAreVegas Total Pushes on page load
let weAreVegasSetTotalPushes =
  Number(localStorage.getItem('weAreVegas Spread Pushes')) +
  Number(localStorage.getItem('weAreVegas OU Pushes'));
document.getElementById('weAreVegasTotalPushes').value =
  weAreVegasSetTotalPushes;

// setting weAreVegasUnit on page load
let weAreVegasSetUnit = Number(localStorage.getItem('weAreVegasUnit'));
document.getElementById('weAreVegasUnit').value = weAreVegasSetUnit;

// setting weAreVegas Spread Wins on page load
let weAreVegasSetSpreadWins = Number(
  localStorage.getItem('weAreVegas Spread Wins')
);
document.getElementById('weAreVegasSpreadWins').value = weAreVegasSetSpreadWins;

// setting weAreVegas Spread Losses on page load
let weAreVegasSetSpreadLosses = Number(
  localStorage.getItem('weAreVegas Spread Losses')
);
document.getElementById('weAreVegasSpreadLosses').value =
  weAreVegasSetSpreadLosses;

// setting weAreVegas Spread Pushes on page load
let weAreVegasSetSpreadPushes = Number(
  localStorage.getItem('weAreVegas Spread Pushes')
);
document.getElementById('weAreVegasSpreadPushes').value =
  weAreVegasSetSpreadPushes;

// setting weAreVegas OU Wins on page load
let weAreVegasSetOUWins = Number(localStorage.getItem('weAreVegas OU Wins'));
document.getElementById('weAreVegasOUWins').value = weAreVegasSetOUWins;

// setting weAreVegas OU Losses on page load
let weAreVegasSetOULosses = Number(
  localStorage.getItem('weAreVegas OU Losses')
);
document.getElementById('weAreVegasOULosses').value = weAreVegasSetOULosses;

// setting weAreVegas OU Pushes on page load
let weAreVegasSetOUPushes = Number(
  localStorage.getItem('weAreVegas OU Pushes')
);
document.getElementById('weAreVegasOUPushes').value = weAreVegasSetOUPushes;

// setting values on page load
weAreVegasCalcTotalWinPercentage();
weAreVegasCalcUnitWinLoss();
weAreVegasCalcSpreadWinPercentage();
weAreVegasCalcOUWinPercentage();

// storing weAreVegas Total Wins in local and calculating
function weAreVegasStoreTotalWins() {
  let weAreVegasGetTotalWins = Number(
    document.getElementById('weAreVegasTotalWins').value
  );
  localStorage.setItem('weAreVegas Total Wins', weAreVegasGetTotalWins);
  weAreVegasCalcTotalWinPercentage();
  weAreVegasCalcUnitWinLoss();
}

// storing weAreVegas Total Losses in local and calculating
function weAreVegasStoreTotalLosses() {
  let weAreVegasGetTotalLosses = Number(
    document.getElementById('weAreVegasTotalLosses').value
  );
  localStorage.setItem('weAreVegas Total Losses', weAreVegasGetTotalLosses);
  weAreVegasCalcTotalWinPercentage();
  weAreVegasCalcUnitWinLoss();
}

// storing pushes in local and calculating
function weAreVegasStoreTotalPushes() {
  let weAreVegasGetPushes = Number(
    document.getElementById('weAreVegasTotalPushes').value
  );
  localStorage.setItem('weAreVegas Total Pushes', weAreVegasGetPushes);
}

// storing weAreVegasUnit in local and calculating
function weAreVegasStoreUnit() {
  let weAreVegasGetUnit = Number(
    document.getElementById('weAreVegasUnit').value
  );
  localStorage.setItem('weAreVegasUnit', weAreVegasGetUnit);
  weAreVegasCalcUnitWinLoss();
}

// storing weAreVegas Spread Wins in local and calculating on input change
function weAreVegasStoreSpreadWins() {
  let weAreVegasGetSpreadWins = Number(
    document.getElementById('weAreVegasSpreadWins').value
  );
  let weAreVegasGetOUWins = Number(
    document.getElementById('weAreVegasOUWins').value
  );
  let weAreVegasGetTotalWins = weAreVegasGetSpreadWins + weAreVegasGetOUWins;
  localStorage.setItem('weAreVegas Spread Wins', weAreVegasGetSpreadWins);
  localStorage.setItem('weAreVegas Total Wins', weAreVegasGetTotalWins);
  document.getElementById('weAreVegasTotalWins').value = weAreVegasGetTotalWins;
  weAreVegasCalcSpreadWinPercentage();
  weAreVegasCalcTotalWinPercentage();
  weAreVegasCalcUnitWinLoss();
}

// storing weAreVegas Spread Losses in local and calculating on input change
function weAreVegasStoreSpreadLosses() {
  let weAreVegasGetSpreadLosses = Number(
    document.getElementById('weAreVegasSpreadLosses').value
  );
  let weAreVegasGetOULosses = Number(
    document.getElementById('weAreVegasOULosses').value
  );
  let weAreVegasGetTotalLosses =
    weAreVegasGetSpreadLosses + weAreVegasGetOULosses;
  localStorage.setItem('weAreVegas Spread Losses', weAreVegasGetSpreadLosses);
  localStorage.setItem('weAreVegas Total Losses', weAreVegasGetTotalLosses);
  document.getElementById('weAreVegasTotalLosses').value =
    weAreVegasGetTotalLosses;
  weAreVegasCalcSpreadWinPercentage();
  weAreVegasCalcTotalWinPercentage();
  weAreVegasCalcUnitWinLoss();
}

// storing weAreVegas Spread Pushes in local and calculating on input change
function weAreVegasStoreSpreadPushes() {
  let weAreVegasGetSpreadPushes = Number(
    document.getElementById('weAreVegasSpreadPushes').value
  );
  let weAreVegasGetOUPushes = Number(
    document.getElementById('weAreVegasOUPushes').value
  );
  let weAreVegasGetTotalPushes =
    weAreVegasGetSpreadPushes + weAreVegasGetOUPushes;
  localStorage.setItem('weAreVegas Spread Pushes', weAreVegasGetSpreadPushes);
  localStorage.setItem('weAreVegas Total Pushes', weAreVegasGetTotalPushes);
  document.getElementById('weAreVegasTotalPushes').value =
    weAreVegasGetTotalPushes;
}

// storing over under wins in local and calculating on input change
function weAreVegasStoreOUWins() {
  let weAreVegasGetOUWins = Number(
    document.getElementById('weAreVegasOUWins').value
  );
  let weAreVegasGetSpreadWins = Number(
    document.getElementById('weAreVegasSpreadWins').value
  );
  let weAreVegasGetTotalWins = weAreVegasGetSpreadWins + weAreVegasGetOUWins;
  localStorage.setItem('weAreVegas OU Wins', weAreVegasGetOUWins);
  localStorage.setItem('weAreVegas Total Wins', weAreVegasGetTotalWins);
  document.getElementById('weAreVegasTotalWins').value = weAreVegasGetTotalWins;
  weAreVegasCalcOUWinPercentage();
  weAreVegasCalcTotalWinPercentage();
  weAreVegasCalcUnitWinLoss();
}

// storing over under losses in local and calculating on input change
function weAreVegasStoreOULosses() {
  let weAreVegasGetOULosses = Number(
    document.getElementById('weAreVegasOULosses').value
  );
  let weAreVegasGetSpreadLosses = Number(
    document.getElementById('weAreVegasSpreadLosses').value
  );
  let weAreVegasGetTotalLosses =
    weAreVegasGetSpreadLosses + weAreVegasGetOULosses;
  localStorage.setItem('weAreVegas OU Losses', weAreVegasGetOULosses);
  localStorage.setItem('weAreVegas Total Losses', weAreVegasGetTotalLosses);
  document.getElementById('weAreVegasTotalLosses').value =
    weAreVegasGetTotalLosses;
  weAreVegasCalcOUWinPercentage();
  weAreVegasCalcTotalWinPercentage();
  weAreVegasCalcUnitWinLoss();
}

// storing over under pushes in local and calculating on input change
function weAreVegasStoreOUPushes() {
  let weAreVegasGetOUPushes = Number(
    document.getElementById('weAreVegasOUPushes').value
  );
  let weAreVegasGetSpreadPushes = Number(
    document.getElementById('weAreVegasSpreadPushes').value
  );
  let weAreVegasGetTotalPushes =
    weAreVegasGetSpreadPushes + weAreVegasGetOUPushes;
  localStorage.setItem('weAreVegas OU Pushes', weAreVegasGetOUPushes);
  localStorage.setItem('weAreVegas Total Pushes', weAreVegasGetTotalPushes);
  document.getElementById('weAreVegasTotalPushes').value =
    weAreVegasGetTotalPushes;
}

// calculate spread win percentage on change of any of the numbers
function weAreVegasCalcSpreadWinPercentage() {
  let weAreVegasGetSpreadWins = Number(
    document.getElementById('weAreVegasSpreadWins').value
  );
  let weAreVegasGetSpreadLosses = Number(
    document.getElementById('weAreVegasSpreadLosses').value
  );
  let weAreVegasSpreadWagers =
    weAreVegasGetSpreadWins + weAreVegasGetSpreadLosses;
  let weAreVegasSpreadWinPercentage = (
    (weAreVegasGetSpreadWins / weAreVegasSpreadWagers) *
    100
  ).toFixed(2);

  if (weAreVegasSpreadWinPercentage >= 50) {
    document.getElementById('weAreVegasSpreadWinPercentage').style.color =
      'green';
  } else {
    document.getElementById('weAreVegasSpreadWinPercentage').style.color =
      'red';
  }
  document.getElementById('weAreVegasSpreadWinPercentage').innerHTML =
    weAreVegasSpreadWinPercentage + '%';
}

// calculate OU win percentage on change of any of the numbers
function weAreVegasCalcOUWinPercentage() {
  let weAreVegasGetOUWins = Number(
    document.getElementById('weAreVegasOUWins').value
  );
  let weAreVegasGetOULosses = Number(
    document.getElementById('weAreVegasOULosses').value
  );
  let weAreVegasOUWagers = weAreVegasGetOUWins + weAreVegasGetOULosses;
  let weAreVegasOUWinPercentage = (
    (weAreVegasGetOUWins / weAreVegasOUWagers) *
    100
  ).toFixed(2);

  if (weAreVegasOUWinPercentage >= 50) {
    document.getElementById('weAreVegasOUWinPercentage').style.color = 'green';
  } else {
    document.getElementById('weAreVegasOUWinPercentage').style.color = 'red';
  }
  document.getElementById('weAreVegasOUWinPercentage').innerHTML =
    weAreVegasOUWinPercentage + '%';
}

// calculate total win percentage on change of any of the numbers
function weAreVegasCalcTotalWinPercentage() {
  let weAreVegasGetTotalWins = Number(
    document.getElementById('weAreVegasTotalWins').value
  );
  let weAreVegasGetTotalLosses = Number(
    document.getElementById('weAreVegasTotalLosses').value
  );
  let weAreVegasTotalWagers = weAreVegasGetTotalWins + weAreVegasGetTotalLosses;
  let weAreVegasWinPercentage = (
    (weAreVegasGetTotalWins / weAreVegasTotalWagers) *
    100
  ).toFixed(2);

  if (weAreVegasWinPercentage >= 50) {
    document.getElementById('weAreVegasWinPercentage').style.color = 'green';
  } else {
    document.getElementById('weAreVegasWinPercentage').style.color = 'red';
  }
  document.getElementById('weAreVegasWinPercentage').innerHTML =
    weAreVegasWinPercentage + '%';
}

// calculating total profit/loss based on weAreVegasUnit amount
function weAreVegasCalcUnitWinLoss() {
  let weAreVegasGetTotalWins = Number(
    document.getElementById('weAreVegasTotalWins').value
  );
  let weAreVegasGetTotalLosses = Number(
    document.getElementById('weAreVegasTotalLosses').value
  );
  let weAreVegasUnit = document.getElementById('weAreVegasUnit').value;

  let weAreVegasAmountWon = weAreVegasGetTotalWins * (weAreVegasUnit * 0.9);
  let weAreVegasAmountLost = weAreVegasGetTotalLosses * weAreVegasUnit;

  let weAreVegasUnitWinLoss = (
    weAreVegasAmountWon - weAreVegasAmountLost
  ).toFixed(2);
  if (weAreVegasUnitWinLoss >= 0) {
    document.getElementById('weAreVegasUnitSelect').style.color = 'green';
  } else {
    document.getElementById('weAreVegasUnitSelect').style.color = 'red';
  }
  document.getElementById('weAreVegasUnitSelect').innerHTML =
    '$' + weAreVegasUnitWinLoss;
}
