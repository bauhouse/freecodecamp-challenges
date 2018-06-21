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
  x: null,
  y: null,
  operator: "",
  float: false,
  result: 0
}
init(calculator);

function initCalculator() {
  var mode = "input";
  var input = [];
  var tape = [];
  var num = "";
  var operator = "";
  var float = false;
  var result = 0;

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function( event ) {
      var id = this.id;
      var classes = this.classList;
      var value = this.value;
      var str = value;

      // Input type
      if (id === "clear") {
        clear();
      }
      if (id === "decimal") {
       if (!float) {
          input.push(value);
          float = true;
          str = input.join('');
          display.innerText = str;
        }
        mode = "input";
      }
      if (classes.contains("digit")) {
        input.push(value);
        str = input.join('');
        num = Number(str);
        display.innerText = str;
        mode = "input";
      }
      if (classes.contains("operator")) {
        str = str.replace('*','×').replace('/', '÷');
        if (mode === "input") {
          console.log(num);
          tape.push(num);
        }
        console.log(str);
        tape.push(value);
        enterNum();
        mode = "operator";
      }
      if (id === "equals") {
        mode = "calculate";
        console.log(num);
        tape.push(num);
        var expression = tape.join(' ');
        console.log(expression);
        result = eval(expression);
        var str = expression.replace('*','×').replace('/', '÷');
        console.log(str);
        console.log(value + ' ' + result);
        if (result.toString().length > 12) {
          result = Number(result.toFixed(9));
        }
        display.innerText = result;
      }
    });
  }
}

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
  c.x = null;
  c.y = null;
  c.operator = "";
  c.float = false;
  c.result = 0;
  displayResult(c.result);
  return c;
}

function enterDigit(value, c) {
  c.mode = "input";
  c.input.push(value);
  c.str = c.input.join('');
  displayResult(c.str);
  return c;
}

function enterDecimal(value, c) {
  if (!c.float) {
    c.input.push(value);
    c.float = true;
    c.str = c.input.join('');
  }
  displayResult(c.str);
  return c;
}

function enterOperator(value, c) {
  c.operator = value;
  enterNumber(c);
  c.tape.push(value);
  resetInput(c);
  calculateResult(c);
  displayResult(c.result);
  c.x = c.result;
  resetOperator(c);
  return c;
}

function enterEquals(value, c) {
  enterNumber(c);
  calculateResult(c);
  displayResult(c.result);
  c.x = c.result;
  printTape(c);
  debugCalculator(c);
  return c;
}

function enterNumber(c) {
  var num = Number(c.str);
  c.tape.push(num);
  if (c.x) {
    c.y = num;
  } else {
    c.x = num;
  }
  return c;
}

function calculateResult(c) {
  if (c.y) {
    if (c.operator) {
      c.result = calculate(c.x, c.y, c.operator);
    }
  } else if (c.x) {
    c.result = c.x;
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
  console.log("x: " + c.x);
  console.log("y: " + c.y);
  console.log("operator: " + c.operator);
  console.log("float: " + c.float);
  console.log("result: " + c.result);
}
