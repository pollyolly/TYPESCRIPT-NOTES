//Type Annotation
var age: number = 44;          // number variable  
var name: string = "Rahul";     // string variable  
var isUpdated: boolean = true; // Boolean variable   
//Use of Type Annotation as a parameter
function display(id:number, name:string)  
{  
    console.log("Id = " + id + ", Name = " + name);  
}  
display(101, "Rohit Sharma");  
//Inline Type Annotation
var student : {   
    id: number;   
    name: string;   
};   
  
student = {   
  id: 100,   
  name : "John"  
}  

