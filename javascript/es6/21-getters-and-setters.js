function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
      this._celsius = Number((5/9 * (fahrenheit - 32)).toFixed(2));
    }

    // getter
    get temperature(){
      return this._celsius;
    }
    // setter
    set temperature(celsius){
      this._fahrenheit = Number((celsius * 9.0 / 5 + 32).toFixed(2));
      this._celsius = celsius;
    }

  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
console.log(temp);



/*
Use class keyword to create a Thermostat class.
The constructor accepts Fahrenheit temperature.
Now create getter and setter in the class,
to obtain the temperature in Celsius scale.
Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32,
where F is the value of temperature in Fahrenheit scale,
and C is the value of the same temperature in Celsius scale
*/
