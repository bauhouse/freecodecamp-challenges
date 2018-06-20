/*--------------------------------*/
/* JavaScript Calculator          */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

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
    var value = this.value;
    var str = value;
    var classes = this.classList;

    // Input type
    if (id === "clear") {
      clear();
    }
    if (id === "decimal") {
      mode = "input";
      if (!float) {
        input.push(value);
        float = true;
        str = input.join('');
        display.innerText = str;
      }
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

function clear() {
  mode = "input";
  input = [];
  tape = [];
  num = "";
  float = false;
  result = 0;
  display.innerText = result;
  return result;
}

function enterNum() {
  num = "";
  float = false;
  input = [];
}
