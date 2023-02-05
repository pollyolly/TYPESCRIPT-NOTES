//TypeScript Map
//Create map
// var map = new Map();  

//Map methods
/*
1.	map.set(key, value)	It is used to add entries in the map.
2.	map.get(key)	It is used to retrieve entries from the map. It returns undefined if the key does not exist in the map.
3.	map.has(key)	It returns true if the key is present in the map. Otherwise, it returns false.
4.	map.delete(key)	It is used to remove the entries by the key.
5.	map.size()	It is used to returns the size of the map.
6.	map.clear()	It removes everything from the map.
*/
//Example
let map = new Map();  
  
map.set('1', 'abhishek');     
map.set(1, 'www.javatpoint.com');       
map.set(true, 'bool1');   
map.set('2', 'ajay');  
  
console.log( "Value1= " +map.get(1)   );   
console.log("Value2= " + map.get('1') );   
console.log( "Key is Present= " +map.has(3) );   
console.log( "Size= " +map.size );   
console.log( "Delete value= " +map.delete(1) );   
console.log( "New Size= " +map.size );  

//Iterating Map Data
let ageMapping = new Map();  
   
ageMapping.set("Rakesh", 40);  
ageMapping.set("Abhishek", 25);  
ageMapping.set("Amit", 30);  
   
//Iterate over map keys  
for (let key of ageMapping.keys()) {  
    console.log("Map Keys= " +key);          
}  
//Iterate over map values  
for (let value of ageMapping.values()) {  
    console.log("Map Values= " +value);      
}  
console.log("The Map Enteries are: ");   
//Iterate over map entries  
for (let entry of ageMapping.entries()) {  
    console.log(entry[0], entry[1]);   
} 

