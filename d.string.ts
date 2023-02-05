//TypeScript String
let uname = new String("Hello JavaTpoint");  
console.log("Message: " +uname);  
console.log("Length: "+uname.length);  

//1. Single quoted strings
var studentName: String = 'Peter';  
//2. Double quoted strings
var studentName: String = "Peter";  
//3. Back-ticks strings
let empName:string = "Rohit Sharma";   
let compName:string = "JavaTpoint";   
// Pre-ES6  
let empDetail1: string = empName + " works in the " + compName + " company.";   
// Post-ES6  
let empDetail2: string = `${empName} works in the ${compName} company.`;   
console.log("Before ES6: " +empDetail1);  
console.log("After ES6: " +empDetail2);  

//Multi-Line String
let multi = 'hello ' +  
    'world ' +  
    'my ' +  
    'name ' +  
    'is ' +  
    'Rohit';  

//String Literal Type
//Syntax
Type variableName = "value1" | "value2" | "value3"; // upto N number of values  

//1. Variable Assignment
type Pet = 'cat' | 'dog' | 'Rabbit';  
let pet: Pet;  
if(pet = 'cat'){  
    console.log("Correct");  
};  
if(pet = 'Deer')  
{  
    console.log("compilation error");  
};  
//2. Function Parameter
type FruitsName = "Apple" | "Mango" | "Orange";  
function showFruitName(fruitsName: FruitsName): void {  
    console.log(fruitsName);  
}  
showFruitName('Mango');   //OK - Print 'Mango'  
//Compile Time Error  
showFruitName('Banana');  

//String Methods
/*
1.	charAt()	It returns the character of the given index.
2.	concat()	It returns the combined result of two or more string.
3.	endsWith()	It is used to check whether a string ends with another string.
4.	includes()	It checks whether the string contains another string or not.
5.	indexOf()	It returns the index of the first occurrence of the specified substring from a string, otherwise returns -1.
6.	lastIndexOf()	It returns the index of the last occurrence of a value in the string.
7.	match()	It is used to match a regular expression against the given string.
8.	replace()	It replaces the matched substring with the new substring.
9.	search()	It searches for a match between a regular expression and string.
10.	slice()	It returns a section of a string.
11.	split()	It splits the string into substrings and returns an array.
12.	substring()	It returns a string between the two given indexes.
13.	toLowerCase()	It converts the all characters of a string into lower case.
14.	toUpperCase()	It converts the all characters of a string into upper case.
15.	trim()	It is used to trims the white space from the beginning and end of the string.
16.	trimLeft()	It is used to trims the white space from the left side of the string.
17.	trimRight()	It is used to trims the white space from the right side of the string.
18.	valueOf()	It returns a primitive value of the specified object.
*/
//Example
//String Initialization  
let str1: string = 'Hello';  
let str2: string = 'JavaTpoint';  
//String Concatenation  
console.log("Combined Result: " +str1.concat(str2));  
//String charAt  
console.log("Character At 4: " +str2.charAt(4));  
//String indexOf  
console.log("Index of T: " +str2.indexOf('T'));  
//String replace  
console.log("After Replacement: " +str1.replace('Hello', 'Welcome to'));  
//String uppercase  
console.log("UpperCase: " +str2.toUpperCase());  


