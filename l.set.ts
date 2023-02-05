//Set
//Create Set
let mySet = new Set();  
//Set Methods
/*
1.	set.add(value)	It is used to add values in the set.
2.	set.has(value)	It returns true if the value is present in the set. Otherwise, it returns false.
3.	set.delete()	It is used to remove the entries from the set.
4.	set.size()	It is used to returns the size of the set.
5.	set.clear()	It removes everything from the set.
*/
//Example
let studentEntries = new Set();  
   
//Add Values  
studentEntries.add("John");  
studentEntries.add("Peter");  
studentEntries.add("Gayle");  
studentEntries.add("Kohli");   
studentEntries.add("Dhawan");   
  
//Returns Set data  
console.log(studentEntries);   
   
//Check value is present or not  
console.log(studentEntries.has("Kohli"));        
console.log(studentEntries.has(10));        
   
//It returns size of Set  
console.log(studentEntries.size);    
   
//Delete a value from set  
console.log(studentEntries.delete("Dhawan"));      
   
//Clear whole Set  
studentEntries.clear();   
  
//Returns Set data after clear method.  
console.log(studentEntries);  


//Chaining of Set Method
let studentEntries = new Set();  
   
//Chaining of add() method is allowed in TypeScript  
studentEntries.add("John").add("Peter").add("Gayle").add("Kohli");  
  
//Returns Set data  
console.log("The List of Set values:");  
console.log(studentEntries);  

//Iterating Set Data
let diceEntries = new Set();  
  
diceEntries.add(1).add(2).add(3).add(4).add(5).add(6);  
   
//Iterate over set entries  
console.log("Dice Entries are:");   
for (let diceNumber of diceEntries) {  
    console.log(diceNumber);   
}  
   
// Iterate set entries with forEach  
console.log("Dice Entries with forEach are:");   
diceEntries.forEach(function(value) {  
  console.log(value);     
});  

