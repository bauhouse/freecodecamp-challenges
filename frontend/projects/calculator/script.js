/*--------------------------------*/
/* JavaScript Calculator          */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var calculator = {
  mode: "",
  type: "",
  input: [],
  tape: [],
  expression: "",
  str: "",
  operand: null,
  x: null,
  y: null,
  operator: "",
  float: false,
  result: 0
}

init(calculator);

function init(c) {
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function( event ) {
      var value = this.value;

      // Get input type
      c = inputType(this, c);

      // Get input
      switch (c.type) {
        case "clear":
          c = clear(c);
          break;
        case "calculate":
          c = enterEquals(value, c);
          break;
        case "decimal":
          c = enterDecimal(value, c);
          break;
        case "digit":
          c = enterDigit(value, c);
          break;
        case "operator":
          c = enterOperator(value, c);
      }

    });
  }
}

function inputType(button, c) {
  var id = button.id;
  var classes = button.classList;

  // Get input type
  if (id === "clear") {
    c.type = "clear";
  } else if (id === "equals") {
    c.type = "calculate";
  } else if (id === "decimal") {
    c.type = "decimal";
  } else if (classes.contains("digit")) {
    c.type = "digit";
  } else if (classes.contains("operator")) {
    c.type = "operator";
  }

  return c;
}

function clear(c) {
  c.mode = "";
  c.type = "";
  c.input = [];
  c.tape = [];
  c.expression = "";
  c.str = "";
  c.operand = null;
  c.x = null;
  c.y = null;
  c.operator = "";
  c.float = false;
  c.result = 0;
  displayResult(c.result);
  return c;
}

function enterDigit(value, c) {
  if (c.mode === "calculate") {
    clear(c);
  }
  c.input.push(value);
  c.str = c.input.join('');
  displayResult(c.str);
  c.mode = "input";
  return c;
}

function enterDecimal(value, c) {
  if (c.mode === "calculate") {
    clear(c);
  }
  if (!c.float) {
    c.input.push(value);
    c.float = true;
    c.str = c.input.join('');
  }
  displayResult(c.str);
  c.mode = "input";
  return c;
}

function enterOperator(value, c) {
  // If the previous mode was "input",
  // enter the current number and calculate
  if (c.mode === "input") {
    var num = enterNumber(c);
    if (c.x && !c.y) {
      c.result = num;
    }
    resetInput(c);
    calculateResult(c);
    displayResult(c.result);
    printTape(c);
    c.x = c.result;
  }

  // Then update the operator
  c.operator = value;
  if (c.mode === "operator") {
    c.tape.pop();
    c.tape.push(value);
  } else {
    c.tape.push(value);
  }
  c.mode = "operator";
  return c;
}

function enterEquals(value, c) {
  enterNumber(c);
  resetInput(c);
  calculateResult(c);
  displayResult(c.result);
  printTape(c);
  c.x = c.result;
  c.mode = "calculate";
  return c;
}

function enterNumber(c) {
  c.operand = Number(c.str);
  if (c.mode === "input") {
    c.tape.push(c.operand);
  }
  if (c.x === null) {
    c.x = c.operand;
  } else {
    c.y = c.operand;
  }
  return c.operand;
}

function calculateResult(c) {
  if (c.y) {
    if (c.operator) {
      c.result = calculate(c.x, c.y, c.operator);
    }
  }
  return c.result;
}

function calculate(x, y, operator) {
  var result = null;
  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
  }
  return displayResult(result);
}

function displayResult(result) {
  if (result.toString().length > 13) {
    result = Number(result.toString().slice(0,13));
  }
  if (result.toString()[0] == '.') {
    result = '0' + result.toString();
  }
  display.innerText = result;
  return result;
}

function translate(str) {
  return str.replace('*','×').replace('/', '÷');
}

function resetInput(c) {
  c.input = [];
  c.float = false;
  return c;
}

function resetOperator(c) {
  c.operator = "";
  return c;
}

function printTape(c) {
  c.expression = c.tape.join(' ');
  c.expression = translate(c.expression);
  console.log(c.expression);
  console.log("= " + c.result);
  return c.expression;
}

function debugCalculator(c) {
  console.log("mode: " + c.mode);
  console.log("type: " + c.type);
  console.log("input: " + c.input);
  console.log("tape: " + c.tape);
  console.log("expression: " + c.expression);
  console.log("str: " + c.str);
  console.log("operand: " + c.operand);
  console.log("x: " + c.x);
  console.log("y: " + c.y);
  console.log("operator: " + c.operator);
  console.log("float: " + c.float);
  console.log("result: " + c.result);
}
