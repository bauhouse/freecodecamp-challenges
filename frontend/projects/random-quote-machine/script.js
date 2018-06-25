/*--------------------------------*/
/* Random Quote Machine           */
/*--------------------------------*/
/* by Stephen Bau                 */
/*--------------------------------*/

var display = document.getElementById("display");
var buttons = document.getElementsByClassName("button");
var dataURL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
var quotesJSON = null;
var quotes = [];
var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var quote = {
  num: 1,
  text: null,
  author: null
};
var displayText = document.getElementById("text");
var displayAuthor = document.getElementById("author");

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

function getQuotes(data) {
  quotesJSON = parseJSON(data);
  quotes = quotesJSON.quotes;
  getRandomQuote(quotes);
}

function getRandomQuote() {
  var num = randomNumber(quote.num, quotes.length);
  getCurrentQuote(num);
}

function getCurrentQuote(num) {
  quote.num = num;
  quote.text = quotes[num].quote;
  quote.author = quotes[num].author;
  displayCurrentQuote();
}

function displayCurrentQuote() {
  displayText.innerText = quote.text;
  displayAuthor.innerText = "— " + quote.author;
}

function getInput(button) {
  key.id = button.id;
  key.name = button.dataset.key;
  key.code = button.dataset.keycode;
  eventCallback();
}

function eventCallback() {
  getRandomQuote();
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

function randomNumber(current, num) {
  var num = Math.floor(Math.random() * num);
  if (current == num) {
    return randomNumber(current, num);
  } else {
    return num;
  }
}
