// is this best approach of can I look back to HC projects and write a simple server that we can update as part of this page

// set all inputs to what is stored in local storage

// set the onchange=storeData() for each input on page load
let inputs = document.getElementsByTagName('input');
for (var i = 0; i < inputs.length; i++) {
  inputs.addEventListener('change', storeData);
}

// stores value of first input
// need to update so it does all of the values
function storeData() {
  let input = document.getElementById('test').value;
  localStorage.setItem('test', input);
}
