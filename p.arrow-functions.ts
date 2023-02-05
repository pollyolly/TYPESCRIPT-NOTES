//TypeScript Arrow function
// ES5: Without arrow function  
var getResult = function(username, points) {  
    return username + ' scored ' + points + ' points!';  
  };  
    
  // ES6: With arrow function  
  var getResult = (username: string, points: number): string => {  
    return `${ username } scored ${ points } points!`;  
  } 

//Arrow function with parameter
  let sum = (a: number, b: number): number => {  
    return a + b;  
}  
console.log(sum(20, 30)); //returns 50  

let sum = (a, b) => {  
    return a + b;  
};  
console.log(sum(20, 30)); //returns 50  

//Arrow function without a parameter
let Print = () => console.log("Hello JavaTpoint!");  
Print();  

let sum = (a: number, b: number) => a + b;  
console.log("SUM: " +sum(5, 15));  

//Arrow function in a class
class Student {  
    studCode: number;  
    studName: string;  
    constructor(code: number, name: string) {  
            this.studName = name;  
            this.studCode = code;  
    }  
    showDetail = () => console.log("Student Code: " + this.studCode + '\nStudent Name: ' + this.studName)  
}  
let stud = new Student(101, 'Abhishek Mishra');  
stud.showDetail();  