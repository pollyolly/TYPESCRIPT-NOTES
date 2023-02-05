//TypeScript Tuples
let tuple_name = [val1,val2,val3, ...val n];  
//Example
let arrTuple = [101, "JavaTpoint", 105, "Abhishek"];  
console.log(arrTuple);  
//Example
let arrTuple = [];   
arrTuple[0] = 101  
arrTuple[1] = 105  

//Accessing tuple Elements
let empTuple = ["Rohit Sharma", 25, "JavaTpoint"];  
console.log("Name of the Employee is : "+empTuple [0]);  
console.log("Age of the Employee is : "+empTuple [1]);  
console.log(empTuple [0]+" is working in "+empTuple [2]);  

//Operations on Tuple
//Push()
let empTuple = ["Rohit Sharma", 25, "JavaTpoint"];  
console.log("Items: "+empTuple);  
console.log("Length of Tuple Items before push: "+empTuple.length);   // returns the tuple size  
empTuple.push(10001);   // append value to the tuple   
console.log("Length of Tuple Items after push: "+empTuple.length);  
console.log("Items: "+empTuple);  
//Pop()
let empTuple = ["Rohit Sharma", 25, "JavaTpoint", 10001];  
console.log("Items: "+empTuple);  
console.log("Length of Tuple Items before pop: "+empTuple.length);   // returns the tuple size  
empTuple.pop();   // removed value to the tuple   
console.log("Length of Tuple Items after pop: "+empTuple.length);  
console.log("Items: "+empTuple);  

//Update or Modify the Tuple Elements
let empTuple = ["Rohit Sharma", 25, "JavaTpoint"];  
empTuple[1] = 30;  
console.log("Name of the Employee is: "+empTuple [0]);  
console.log("Age of the Employee is: "+empTuple [1]);  
console.log(empTuple [0]+" is working in "+empTuple [2]);  

//Clear the fields of a Tuple
let empTuple = ["Rohit Sharma", 25, "JavaTpoint"];  
empTuple = [];  
console.log(empTuple);  

//Destructuring the Tuple
let empTuple = ["Rohit Sharma", 25, "JavaTpoint"];  
let [emp, student] = empTuple;  
console.log(emp);  
console.log(student);  

//Passing Tuple to Functions
//Tuple Declaration  
let empTuple = ["JavaTpoint", 101, "Abhishek"];     
//Passing tuples in function    
function display(tuple_values:any[]) {    
   for(let i = 0;i<empTuple.length;i++) {     
      console.log(empTuple[i]);    
   }      
}    
//Calling tuple in function    
display(empTuple);  

