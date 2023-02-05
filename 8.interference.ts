var x = "JavaTpoint";  
var y = 501;  
x = y; // Compile-time Error: Type 'number' is not assignable to type 'string'  


let arr = [ 10, 20, null, 40 ];  //array: number and null

let arr2 = [ 10, 20, "JavaTpoint" ];  //string or number

//return type of the function sum is number. 
//So, its result will be stored in a number type variable, not a string type variable.
function sum(x: number, y: number )  
{  
    return x + y;      
}  
let Addition: number = sum(10,20); // Correct  
let str: string = sum(10,20); // Compiler Error   

