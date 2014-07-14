// This is the solution that we went over in class


window.onload = function() {

// Display 
  var op_display = document.getElementById('operator_display');
  var val_display = document.getElementById('result_display_value');

// Number buttons
    var numOne = document.getElementById('one');
    var numTwo = document.getElementById('two');
    var numThree = document.getElementById('three');
    var numFour = document.getElementById('four');
    var numFive = document.getElementById('five');
    var numSix = document.getElementById('six');
    var numSeven = document.getElementById('seven');
    var numEight = document.getElementById('eight');
    var numNine = document.getElementById('nine');
    var numZero = document.getElementById('zero');

// Operations buttons
    var addOp = document.getElementById('plus');
    var subOp = document.getElementById('minus');
    var multOp = document.getElementById('times');
    var divOp = document.getElementById('divide');
    var entOp = document.getElementById('ent');
    var clrOp = document.getElementById('clear');

  // state
  var firstOperand = true, operand1 = '', operand2 = '', operation;
  
  // event handlers
  numOne.onclick = function() {
    if (firstOperand) {
      operand1 += numOne.innerHTML;
    } else {
      operand2 += numOne.innerHTML;
    }
    display.innerHTML += numOne.innerHTML;
  };
  numTwo.onclick = function() {
    if (firstOperand) {
      operand1 += numTwo.innerHTML;
    } else {
      operand2 += numTwo.innerHTML; 
    }
    display.innerHTML += numTwo.innerHTML;
  };

  addOp.onclick = function() {
    operation = '+';
    firstOperand = false;
    display.innerHTML = '';
    operator.innerHTML = addOp.innerHTML;
  };
  subOp.onclick = function() {
    operation = '-';
    firstOperand = false;
    display.innerHTML = '';
    operator.innerHTML = subOp.innerHTML;
  };
  multOp.onclick = function() {
    operation = '*';
    firstOperand = false;
    display.innerHTML = '';
    operator.innerHTML = multOp.innerHTML;
  };
  divOp.onclick = function() {
    operation = '/';
    firstOperand = false;
    display.innerHTML = '';
    operator.innerHTML = divOp.innerHTML;
  };
  entOp.onclick = function() {
    var result;
    if (operation === '+') {
      result = parseInt(operand1) + parseInt(operand2);
    } else if (operation === '-') {
      result = parseInt(operand1) - parseInt(operand2);
    } else if (operation === '*') {
      result = parseInt(operand1) * parseInt(operand2);
    } else if (operation === '/') {
      result = parseInt(operand1) / parseInt(operand2);
    }
    display.innerHTML = result;
  };
  clrOp.onclick = function() {
    firstOperand = true;
    operand1 = '';
    operand2 = '';
    display.innerHTML = '';
    operator.innerHTML = '';
    operation = undefined;
  };
  
};
    