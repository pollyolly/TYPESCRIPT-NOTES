//Ternary/Conditional Operator
//expression ? expression-1 : expression-2;  
let num = 16;  
let result = (num > 0) ? "True":"False"   
console.log(result);  
//Concatenation Operator
let message = "Welcome to " + "JavaTpoint";  
console.log("Result of String Operator: " +message);  

//Type Operators
//in
let Bike = {make: 'Honda', model: 'CLIQ', year: 2018};
console.log('make' in Bike);   // 
Output:
true
//delete
let Bike = { Company1: 'Honda',
             Company2: 'Hero',
             Company3: 'Royal Enfield'
           };
delete Bike.Company1;
console.log(Bike);   // 
Output:
{ Company2: 'Hero', Company3: 'Royal Enfield' }
//typeof
	
let message = "Welcome to " + "JavaTpoint";
console.log(typeof message);  // 
Output:
String
//instanceof
let arr = [1, 2, 3];
console.log( arr instanceof Array ); // true
console.log( arr instanceof String ); // false

