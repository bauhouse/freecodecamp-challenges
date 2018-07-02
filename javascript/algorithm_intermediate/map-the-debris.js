function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var opArr = []; // orbital periods array

  for (var i = 0; i < arr.length; i++) {
    var name = arr[i].name;
    var alt = arr[i].avgAlt;
    var op = calculateOrbitalPeriod(alt);
    var obj = {
      name: name,
      orbitalPeriod: op
    }
    opArr.push(obj);
  }

  function calculateOrbitalPeriod(alt) {
    var radius = earthRadius;
    var a = radius + alt; // semi-major axis
    var μ = GM;
    var T; // Orbital Period

    return T = Math.round(2 * Math.PI * Math.sqrt( Math.pow(a, 3) / μ ));
  }

  return opArr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);

var newArr = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
console.log(newArr);

/*
=======================================
Wikipedia: Orbital Period
---------------------------------------
https://en.wikipedia.org/wiki/Orbital_period

T = 2 * π * Math.sqrt( Math.pow(a, 3) / μ )

where

a is the orbit's semi-major axis in meters
μ = GM is the standard gravitational parameter in m^3/s^2
G is the gravitational constant
M is the mass of the more massive body

*/
