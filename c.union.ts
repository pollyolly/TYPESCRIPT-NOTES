//TypeScript Union
let value: number|string;  
value = 120;  
console.log("The Numeric value of a value is: "+value);  
value = "Welcome to JavaTpoint";  
console.log("The String value of a value is: "+value);  

//Passing Union Type in Function Parameter
function display(value: (number | string))  
{  
    if(typeof(value) === "number")  
        console.log('The given value is of type number.');  
    else if(typeof(value) === "string")  
        console.log('The given value is of type string.');  
}  
display(123);  
display("ABC");  

//Passing Union Type to Arrays
let arrType:number[]|string[];   
let i:number;   
arrType = [1,2,3,4];  
console.log("Numeric type array:")    
  
for(i = 0;i<arrType.length;i++){  
   console.log(arrType[i]);  
}  
arrType = ["India","America","England"];  
console.log("String type array:")    
  
for(i = 0;i<arrType.length;i++){   
   console.log(arrType[i]);  
}  

//The union can replace enums.
//Example
export enum Color {RED, BLUE, WHITE}  
//Example
export type Color = 'red' | 'white' | 'blue';  
const myColor: Color = 'red';  
console.log(myColor.toUpperCase());  


