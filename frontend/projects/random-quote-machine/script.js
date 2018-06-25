/*--------------------------------*/
/* Random Quote Machine           */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var dataURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
var quotes = null;

var key = {id: null, name: null, code: null};

init();

function init() {
  getJSON(dataURL, getQuotes);
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

function getQuotes(data) {
  quotes = parseJSON(data);
  console.log(quotes);
}

function getJSON(url, func) {
  loadFile(url, 2000, loadJSON, func);
}

function loadJSON(func) {
  var data = this.responseText;
  func(data);
}

function parseJSON(text) {
  if (text) {
    return JSON.parse(text);
  }
  return null;
}

function loadFile(url, timeout, callback) {
  var args = Array.prototype.slice.call(arguments, 3);
  var xhr = new XMLHttpRequest();
  xhr.ontimeout = function () {
    console.error("The request for " + url + " timed out.");
  };
  xhr.onload = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback.apply(xhr, args);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.open("GET", url, true);
  xhr.timeout = timeout;
  xhr.send(null);
}
