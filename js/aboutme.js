/* When the input field receives input, convert the value from fahrenheit to celsius */
function tempConverter(number) {
  valNum = parseFloat(number);
  document.getElementById("celsius").innerHTML = (number-32) / 1.8;
}