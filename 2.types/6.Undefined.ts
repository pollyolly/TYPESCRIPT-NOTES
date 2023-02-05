//Undefined
let num: number = undefined;  
let bool: boolean = undefined;  
let str: string = undefined; 
//Any Type
1. let val: any = 'Hi';  
      val = 555;   // OK  
      val = true;   // OK           
2. function ProcessData(x: any, y: any) {  
                       return x + y;  
            }  
            let result: any;  
            result = ProcessData("Hello ", "Any!"); //Hello Any!  
            result = ProcessData(2, 3); //5  
//Array
//1. Use the type of the elements followed by [] to denote an array of that element type:
var list : number[] = [1, 3, 5];  
//2. The second way uses a generic array type:
var list : Array<number> = [1, 3, 5];  
//Touple
// Declare a tuple  
let a: [string, number];  
  
// Initialize it  
a = ["hi", 8, "how", 5]; // OK

//Interface
interface Calc {  
    subtract (first: number, second: number): any;  
}  
   
let Calculator: Calc = {  
    subtract(first: number, second: number) {  
        return first - second;  
    }  
}  
//Class
class Student  
{  
    RollNo: number;  
    Name: string;   
    constructor(_RollNo: number, Name: string)   
    {  
        this.RollNo = _rollNo;  
        this.Name = _name;  
    }  
    showDetails()  
    {  
        console.log(this.rollNo + " : " + this.name);  
    }  
}  
//Enums
enum Color {  
    Red, Green, Blue  
};  
let c: Color;  
ColorColor = Color.Green;  
//Functions
//named function with number as parameters type and return type  
function add(a: number, b: number): number {  
    return a + b;  
}  

//anonymous function with number as parameters type and return type  
let sum = function (a: number, y: number): number {  
    return a + b;  
};  
//Generic
function identity<T>(arg: T): T {  
    return arg;  
}  
let output1 = identity<string>("myString");  
let output2 = identity<number>( 100 );  

//Decorators
function f() {  
    console.log("f(): evaluated");  
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {  
        console.log("f(): called");  
    }  
}  
  
class C {  
    @f()  
    method() {}  
}  