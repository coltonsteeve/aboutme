function tempConverter(number) {
    valNum = parseFloat(number);
    fToC = (number - 32) / 1.8;
    return fToC;
    //document.getElementById("celsius").innerHTML = (number-32) / 1.8;
  }
//Added QUnit Test
  QUnit.test("tempConverter", function(assert) {
	assert.equal(tempConverter(32), 0, "32 degrees Fahrenheit == 0 degrees Celsius");
	assert.equal(tempConverter(23), -5, "23 degrees Fahrenheit == -5 degrees Celsius");
	assert.equal(tempConverter(50), 10, "50 degrees Fahrenheit == 10 degrees Celsius");
	assert.equal(tempConverter(5), -15, "5 degrees Fahrenheit == -15 degrees Celsius");
	assert.equal(tempConverter(500), 260, "500 degrees Fahrenheit == 260 degrees Celsius");
 });