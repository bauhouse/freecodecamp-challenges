function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C


/*
Use class keyword to create a Thermostat class.
The constructor accepts Fahrenheit temperature.
Now create getter and setter in the class,
to obtain the temperature in Celsius scale.
Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32,
where F is the value of temperature in Fahrenheit scale,
and C is the value of the same temperature in Celsius scale
*/
