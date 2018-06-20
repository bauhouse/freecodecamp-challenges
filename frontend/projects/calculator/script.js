/*--------------------------------*/
/* JavaScript Calculator          */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var calculator = {
  mode:"input",
  input: [],
  tape: [],
  str: "",
  x: null,
  y: null,
  operator: "",
  float: false,
  result: 0
}

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

function clear(calculator) {
  var c = calculator;
  c.mode = "input";
  c.input = [];
  c.tape = [];
  c.x = null;
  c.y = null;
  c.operator = "";
  c.float = false;
  c.result = 0;
  updateDisplay(c.result);
  return c;
}

function setMode(calculator) {
  var c = calculator;

  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function( event ) {
      var id = this.id;
      var classes = this.classList;
      var value = this.value;

      // Set mode
      if (id === "clear") {
        c.mode = "clear";
      } else if (id === "equals") {
        c.mode = "calculate";
      } else if (id === "decimal") {
        c.mode = "decimal";
      } else if (classes.contains("digit")) {
        c.mode = "digit";
      } else if (classes.contains("operator")) {
        c.mode = "operator";
      }
    });
  }
}

function enterNum() {
  num = "";
  float = false;
  input = [];
}

function calculate(x,y,operator) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
  }
}

function updateDisplay(result) {
  display.innerText = result;
  return(result);
}
