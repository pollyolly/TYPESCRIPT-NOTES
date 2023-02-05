//Array Declaration
// 1. Using square brackets.
/*
 * let array_name[:datatype] = [val1,val2,valn..]  
 */  
//Example:
/*
 * let fruits: string[] = ['Apple', 'Orange', 'Banana'];  
 */  
// 2. Using a generic array type.
/*
 * let array_name1: Array<elementType> = [val1,val2,valn..]
 */  
//Example:
let fruits1: Array<string> = ['Apple', 'Orange', 'Banana'];  
//Types of the array in TypeScript
//Single-Dimensional Array
//Syntax
/*
 * let array_name2[:datatype];   
 */
//initialization
/*
 * array_name = [val1,val2,valn..]  
 */
//Example
let arrs:number[];   
arrs = [1, 2, 3, 4]   
console.log("Array[0]: " +arrs[0]);   
console.log("Array[1]: " +arrs[1]);  
//Multi-Dimensional Array
//Syntax
/*
 * let arr_name:datatype[][] = [ [a1,a2,a3], [b1,b2,b3] ];  
 */
//Initialization
/*
 * let arr_name:datatype[initial_array_index][referenced_array_index] = [ [val1,val2,val 3], [v1,v2,v3]];
 */  
//Example
var mArray:number[][] = [[1,2,3],[5,6,7]] ;  
console.log(mArray[0][0]);  
console.log(mArray[0][1]);  
console.log(mArray[0][2]);  
console.log();  
console.log(mArray[1][0]);  
console.log(mArray[1][1]);  
console.log(mArray[1][2]);  
//Array Object
//Syntax
/*
 * let arr_name:datatype[] = new Array(values);  
 */ 
//Example
//array by using the Array object.  
let arr:string[] = new Array("JavaTpoint","2200","Java","Abhishek");  
for(var u = 0;u<arr.length;u++) {   
   console.log(arr[u]);  
}  
//Array Traversal by using a for...in loop
let i:any;   
let arr1:string[] = ["JavaTpoint", "2300", "Java", "Abhishek"];  
for(i in arr1) {   
   console.log(arr1[i])   
}  
//Passing Arrays to Functions
let arr2: string[] = new Array("JavaTpoint", "2300", "Java", "Abhishek");   
//Passing arrays in function  
function display(arr_values: string[]) {  
   for(let i = 0;i<arr_values.length;i++) {   
      console.log(arr2[i]);  
   }    
}  
//Calling arrays in function  
display(arr);  
//TypeScript Spread operator
let arr3 = [ 1, 2, 3];  
let arr4 = [ 4, 5, 6];  
//Create new array from existing array  
let copyArray = [...arr3];     
console.log("CopiedArray: " +copyArray);  
//Create new array from existing array with more elements  
let newArray = [...arr3, 7, 8];  
console.log("NewArray: " +newArray);  
//Create array by merging two arrays  
let mergedArray = [...arr3, ...arr4];  
console.log("MergedArray: " +mergedArray);
//Array Methods
/*
1.	concat()	It is used to joins two arrays and returns the combined result.
2.	copyWithin()	It copies a sequence of an element within the array.
3.	every()	It returns true if every element in the array satisfies the provided testing function.
4.	fill()	It fills an array with a static value from the specified start to end index.
5.	indexOf()	It returns the index of the matching element in the array, otherwise -1.
6.	includes()	It is used to check whether the array contains a certain element or not.
7.	Join()	It is used to joins all elements of an array into a string.
8.	lastIndexOf()	It returns the last index of an element in the array.
9.	Pop()	It is used to removes the last elements of the array.
10.	Push()	It is used to add new elements to the array.
11.	reverse()	It is used to reverse the order of an element in the array.
12.	Shift()	It is used to removes and returns the first element of an array.
13.	slice()	It returns the section fo an array in the new array.
14.	sort()	It is used to sort the elements of an array.
15.	splice()	It is used to add or remove the elements from an array.
16.	toString()	It returns the string representation of an array.
17.	unshift()	It is used to add one or more elements to the beginning of an array.
*/