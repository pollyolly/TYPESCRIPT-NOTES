//Variable declaration
//1. Declare type and value in a single statement
var [identifier] : [type-annotation] = value;  
//2. Declare type without value. Then the variable will be set to undefined.
var [identifier] : [type-annotation];  
//3. Declare its value without type. Then the variable will be set to any.
var [identifier] = value;  
//4. Declare without value and type. Then the variable will be set to any and initialized with undefined.
var [identifier];  
//var keyword
var x = 50;
//Scoping Rules
function f()  
{  
    var X = 5; //Available globally inside f()  
    if(true)  
    {  
        var Y = 10; //Available globally inside f()   
        console.log(X); //Output 5  
        console.log(Y); //Output 10  
    }      
    console.log(X); //Output 5  
    console.log(Y); //Output 10  
}  
f();  
console.log(X); //Returns undefined because value cannot accesses from outside function  
console.log(Y); //Returns undefined because value cannot accesses from outside function  
//let declaration
var declaration: var b = 50;  
let declaration: let b = 50;  
//Block Scoping
function f(input: boolean) {  
    let x = 100;  
    if (input) {  
        // "x" exists here        
        let y = x + 1;  
        return y;  
    }  
    // Error: "y" doesn't exist here  
    return y;  
}  
//Redeclaration
function f(a) {  
    var a;  //Using var doesn't matter 
    var a;  //if redeclared
    if (true) {  
        var a;  
    }  
}  

let a = 10;  
let a = 20; // it gives error: can't re-declare 'a' in the same scope  

//Hoisting Var
function get(x){     
    console.log(a);  //printing x variable. Value is undefined       
    //declared variable after console hoisted to the top at run time    
    var a = x;        
    //again printing x variable. Value is 3.  
    console.log(a);    
  }    
  get(4);  

  //Hoisting Let
  {  
    //program doesn't know about variable b so it will give me an error.  
    console.log(b); // ReferenceError: b is not defined  
    let b = 3;  
  }  

  //Const declaration
  function constTest(){  
    const VAR = 10;  
    console.log("Value is: " +VAR);  
  }  
  constTest();  
//What will happen when we try to re-assign the const variable?
  function constTest(){  
    const VAR = 10;  
    console.log("Output: " +VAR);  // Output: 10  
    const VAR = 10;  
    console.log("Output: " +VAR);  //Uncaught TypeError: Assignment to constant variable  
  }  
  constTest();  