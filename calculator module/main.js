
// var a=5;
//  var b =5;
 
const add = require("./add");
const subs= require("./substract")
 const div =require("./divide.js")
const multi = require("./multiply.js")

var a=20;
var b= 5;



console.log("----Basic Calculator----")
console.log("addition :",add(a,b));
console.log("substraction :",subs(a,b))
console.log('division :',div(a,b))
console.log('multiplication :',multi(a,b))
