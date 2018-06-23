/*--------------------------------*/
/* Markdown Previewer             */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var panel = document.getElementById("panel");
var markdown = document.getElementById('editor').value;
var preview = document.getElementById('preview').innerHTML = marked(markdown);
var buttons = document.getElementsByClassName("button");

var mode = "both";

init();

function init() {
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener("click", function( event ) {
      switchMode(this);
    });
  }
  keyboard();
}

function switchMode(button) {
  var selected = button.innerText.toLowerCase();
  switch (mode) {
    case "both":
      mode = selected;
      break;
    case "markdown":
      if (selected == mode) {
        mode = "both";
      } else {
        mode = "preview";
      }
      break;
    case "preview":
      if (selected == mode) {
        mode = "both";
      } else {
        mode = "markdown";
      }
  }
  selectButton(mode);
  panel.className = mode;
}

function selectButton(mode) {
  resetButtons();
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText.toLowerCase() == mode) {
      buttons[i].classList.add("select");
    }
  }
}

function resetButtons() {
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("select");
  }
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
    var key = event.key || event.keyCode;

    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      if (button.value == key || key == "Enter" && button.value == "=") {
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
