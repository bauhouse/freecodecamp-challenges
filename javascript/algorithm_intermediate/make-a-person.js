var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly

  var firstName = firstAndLast.split(' ')[0];
  var lastName = firstAndLast.split(' ')[1];
  var fullName = [firstName, lastName].join(' ');

  this.setFirstName = function(str) {
    firstName = str;
    updateFullName();
  };

  this.setLastName = function(str) {
    lastName = str;
    updateFullName();
  };

  this.setFullName = function(str) {
    firstName = str.split(' ')[0];
    lastName = str.split(' ')[1];
    updateFullName();
  };

  this.getFirstName = function() {
    return firstName;
  };

  this.getLastName = function() {
    return lastName;
  };

  this.getFullName = function() {
    return fullName;
  };

  function updateFullName() {
    return fullName = [firstName, lastName].join(' ');
  }

};

var bob = new Person('Bob Ross');
bob.getFullName();
console.log(bob.getFullName());
console.log(Object.keys(bob).length);
console.log(Object.keys(bob));
console.log(bob instanceof Person);
console.log(bob.getFirstName());
bob.setFirstName('Haskell');
console.log(bob.getFullName());
console.log(bob.getFirstName());
