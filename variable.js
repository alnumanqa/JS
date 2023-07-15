//Types of variable in javaScript 
//var, let, const

console.log("----------use of var-------")
//We can use var to declare any type of variable
//We can redeclare and reassign variable with var
var firstName = "Al";
var lastName = "Numan";
var age = 30;
var usCitizen = true;
var grade = 3.5;
console.log("My name is: " + firstName + " " + lastName + "\nMy age is: " + age + 
    "\nI am US citizen: " + usCitizen + "\nGrade: " + grade);

//Redeclare variable with var
var firstName = "Mohammad"
console.log("ReDeclaring with var"+ firstName)

//Reassign value with var
firstName = "Md"
console.log(firstName)


console.log("----------use of let-------")
//We can reassign variable with let but we can't redeclare variable with let
let firstName1 = "Al";
let lastName1 = "Numan";
let age1 = 30;
let usCitizen1 = false;
let grade1 = 3.5;
console.log("My name is: " + firstName1 + " " + lastName1 + "\nMy age is: " + age1 + 
    "\nI am US citizen: " + usCitizen1 + "\nGrade: " + grade1); 

//can not Redeclare variable with let
//let firstName1 = "Mohammad"

//Reassign value with let
firstName1 = "Mohammad"
console.log(firstName1)

console.log("----------use of const-------")
//we can't redeclare or reassign with const
const firstName2 = "Al";
const lastName2 = "Numan";
const age2 = 30;
const usCitizen2 = false;
const grade2 = 3.5;
console.log("My name is: " + firstName2 + " " + lastName2 + "\nMy age is: " + age2 + 
    "\nI am US citizen: " + usCitizen2 + "\nGrade: " + grade2); 


//can not Redeclare variable with let
//const firstName2 = "Md";

/*
Reassign variable with const
firstName2 = "md";
console.log(firstName2)
*/
