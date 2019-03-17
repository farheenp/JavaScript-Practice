
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

console.log("Printing var a before defining"+a);
var a = "test";
//var a="abc"; -> This is okay.
console.log(a);
var c = function(){ 
	 var a="bcd";
	return a;
}
console.log(c());
console.log(a);

//console.log("printing let b before defining "+b); -> This will throw exception
let b ="testlet";
//let b="abc"; give error. Cannnot define same variable again
function testlet(){
	 b="abc";
	return b;
}
console.log(testlet());
console.log(b);
b ="test1";

//var d="abcdd";
//console.log("Printing d before declaring"+d); -> error d is not defined
const d="abc";
//let d="bavvd";
//const d ="test1"; -> error identifier d has already been declared
//d="testq"; -> error assignment to constant variable
function testconstant(){
	//d="test1" error assignment to constant variable
	const d="test1";
	console.log(d);
}
//let d="testletwothconst"; -> error identifier d has already been declared
console.log(d);
testconstant();
console.log(d);