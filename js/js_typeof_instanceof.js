/*
The typeof operator checks if a value belongs to one of the seven basic types: number, string, boolean, object, function, undefined or Symbol.

typeof(null) will return object.
*/

console.log(typeof({}));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(1));

class Animal{}
var dog = new Animal();
console.log(dog instanceof Animal); // Output : true

console.log(typeof function(){});