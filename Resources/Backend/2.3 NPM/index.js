//With require
var generateName = require('sillyname');
var sillyName = generateName();
console.log("My name is: " + sillyName);


// With import
import superheroes from "superheroes"

console.log("My name is: " + superheroes.random());