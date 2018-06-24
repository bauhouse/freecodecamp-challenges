/*--------------------------------*/
/* Random Quote Machine           */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");

var key = {id: null, name: null, code: null};
var sound = null;

init();

function init() {
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function( event ) {
      getInput(this);
    });
  }
  keyboard();
}

function getInput(button) {
  key.id = button.id;
  key.name = button.dataset.key;
  key.code = button.dataset.keycode;
}

function keyboard() {
  keyboardEvents("keydown");
  keyboardEvents("keyup");
}

function keyboardEvents(keyEvent) {
  document.addEventListener(keyEvent, function (event) {
    if (event.defaultPrevented) {
      return;
    }
    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (button.dataset.key == event.key || button.dataset.keycode == event.keyCode) {
        if (keyEvent == "keydown") {
          button.classList.add("select");
          getInput(button);
        }
        if (keyEvent == "keyup") {
          button.classList.remove("select");
        }
      }
    }
  });
}
