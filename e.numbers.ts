//TypeScript Numbers
let identifier: number = value;  

//Example
let first: number = 12.0;             // number   
let second: number = 0x37CF;          // hexadecimal  
let third: number = 0o377 ;           // octal  
let fourth: number = 0b111001;        // binary   
  
console.log(first);           // 123  
console.log(second);          // 14287  
console.log(third);           // 255  
console.log(fourth);          // 57  

//Number Properties
/*
1.	MAX_VALUE	It returns the largest possible value of a number in JavaScript and can have 1.7976931348623157E+308.
2.	MIN_VALUE	It returns the smallest possible value of a number in JavaScript and can have 5E-324.
3.	NEGATIVE_INFINITY	It returns a value that is less than MIN_VALUE.
4.	POSITIVE_INFINITY	It returns a value that is greater than MAX_VALUE.
5.	NaN	When some number calculation is not representable by a valid number, then TypeScript returns a value NaN. It is equal to a value that is not a number.
6.	prototype	It is a static property of the Number object. It is used to assign new properties and methods to the Number object in the current document.
*/
//Example
/*
console.log("Number Properties: ");   
console.log("A number variable can hold maximum value: " + Number.MAX_VALUE);   
console.log("A number variable can hold minimum value: " + Number.MIN_VALUE);   
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);   
console.log("Value of Positive Infinity:" + Number.POSITIVE_INFINITY);  
console.log("Example of NaN: " +Math.sqrt(-5)); // NaN  
*/
//Number Methods
/*
1.	toExponential()	It is used to return the exponential notation in string format.
2.	toFixed()	It is used to return the fixed-point notation in string format.
3.	toLocaleString()	It is used to convert the number into a local specific representation of the number.
4.	toPrecision()	It is used to return the string representation in exponential or fixed-point to the specified precision.
5.	toString()	It is used to return the string representation of the number in the specified base.
6.	valueOf()	It is used to return the primitive value of the number.
*/
//Example
let myNumber: number = 12345;  
let myNumber_1: number = 12.8789;  
let myNumber_2: number = 12667.976;  
let myNumber_3: number = 12.5779;  
let myNumber_4: number = 1234;  
let myNumber_5 = new Number(123);  
  
console.log("Number Method: toExponential()");  
console.log(myNumber.toExponential());   
console.log(myNumber.toExponential(2));  
  
console.log("Number Method: toString()");  
console.log(myNumber.toString());  
console.log(myNumber.toString(4));  
  
console.log("Number Method: toFixed()");  
console.log(myNumber_1.toFixed());  
console.log(myNumber_1.toFixed(3));  
  
console.log("Number Method: toLocaleString()");  
console.log(myNumber_2.toLocaleString()); // returns in US English  
  
console.log("Number Method: toPrecision()");  
console.log(myNumber_3.toPrecision(1));   
console.log(myNumber_3.toPrecision(3));  
  
console.log("Number Method: tovalueOf()");  
console.log(myNumber_5)  
console.log(myNumber_5.valueOf())  
console.log(typeof myNumber)  

//
