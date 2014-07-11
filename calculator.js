window.onload = function () {


	var calc = " ";
	var lastInput = null;

	var calculate = function(x){
		calc = calc + x;
		display(x);
		console.log(calc);
	};

	var display= function(y) {
		// test if the last input was not a number. Replace the display with the current input
		if( isNaN(lastInput) && y >= 0 ){ 
			result_display_value.innerHTML = y;
		} 
		// if the last input was a number, concat on this new number
		else if ( y >= 0){ 
			result_display_value.innerHTML += y;
		} 
 		// else display the math symbol on the left
		else {
			op_display.innerHTML= y;
		}
		lastInput = calc[calc.length - 1];

	};

	var clearDisplay = function() {
		result_display_value.innerHTML= " ";
		op_display.innerHTML= " ";
	};

	var clearAll = function() {
		clearDisplay();
		calc = " ";
	};
// Display 
	var op_display = document.getElementById('operator_display');
	var val_display = document.getElementById('result_display_value');

// Number buttons
	var one = document.getElementById('one');
  	var two = document.getElementById('two');
  	var three = document.getElementById('three');
  	var four = document.getElementById('four');
  	var five = document.getElementById('five');
  	var six = document.getElementById('six');
  	var seven = document.getElementById('seven');
  	var eight = document.getElementById('eight');
  	var nine = document.getElementById('nine');
  	var zero = document.getElementById('zero');

// Operations buttons
	var plus = document.getElementById('plus');
  	var minus = document.getElementById('minus');
  	var times = document.getElementById('times');
  	var divide = document.getElementById('divide');
  	var ent = document.getElementById('ent');
  	var clear = document.getElementById('clear');

// Set on clicks for all the buttons
	one.onclick = function(event) {
	 	calculate("1");
	 }  
	two.onclick = function(event) {
	 	calculate("2");
	 } 
	 three.onclick = function(event) {
	 	calculate("3");
	 } 
	 four.onclick = function(event) {
	 	calculate("4");
	 } 
	 five.onclick = function(event) {
	 	calculate("5");
	 }  
	 six.onclick = function(event) {
	 	calculate("6");
	 } 
	 seven.onclick = function(event) {
	 	calculate("7");
	 } 
	 eight.onclick = function(event) {
	 	calculate("8");
	 }
	 nine.onclick = function(event) {
	 	calculate("9");
	 } 
	zero.onclick = function(event) {
	 	calculate("0");
	 }  
	plus.onclick = function(event) {
	 	calculate("+");
	 } 
	 minus.onclick = function(event) {
	 	calculate("-");
	 } 
	 times.onclick = function(event) {
	 	calculate("*");
	 } 
	 divide.onclick = function(event) {
	 	calculate("/");
	 } 
	 ent.onclick = function(event) {
	 	clearDisplay();
	 	result_display_value.innerHTML = eval(calc);
	 	// Add the parenthesis so that the math "FOIL"s properly, assuming the user continues to compute with the final value
	 	calc = "(" + calc + ")";
	 } 
	 clear.onclick = function(event){
	 	clearAll();
	 } 	


}