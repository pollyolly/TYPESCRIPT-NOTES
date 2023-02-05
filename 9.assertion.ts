//Assertion
let empCode: any = 111;   
let employeeCode = <number> empCode;   
console.log(typeof(employeeCode)); //Output: number  

//Using Angular Bracket <>
let empCode1: any = 111;   
let employeeCode1 = <number> empCode1;   

//Using as Keyword
let empCode2: any = 111;   
let employeeCode2 = empCode2 as number;   
//Type Assertion with object
/*
 * let student = { };  
 * student.name = "Rohit"; //Compiler Error: Property 'name' doesn?t exist on type '{}'  
 * student.code = 123; //Compiler Error: Property 'code' doesn?t exist on type '{}'  
 */
//Correct way
interface Student {   
    name: string;   
    code: number;   
}  
let student1 = <Student> {};   
student1.name = "Rohit"; // Correct  
student1.code = 123; // Correct  