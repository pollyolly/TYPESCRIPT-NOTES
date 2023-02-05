//Anonymous function
//Syntax
let res = function( [arguments] ) { }  
//Example
// Anonymous function  
let myAdd = function (x: number, y: number) : number {  
    return x + y;  
};  
// Anonymous function call  
console.log(myAdd(5,3));  

//Rest Parameter
//Syntax
/*
 * function function_name(parameter1[:type], parameter2[:type], ...parameter[:type]) { }  
 */

//Example
function sum(a: number, ...b: number[]): number {  
    let result = a;  
    for (var i = 0; i < b.length; i++) {  
    result += b[i];  
    }  
    return result;  
  }  
  let result1 = sum(3, 5);  
  let result2 = sum(3, 5, 7, 9);  
  console.log(result1 +"\n" + result2);  