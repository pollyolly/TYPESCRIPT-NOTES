//var
//global scope
function varGreeter(){
    var a = 10;        
    var a = 20; //a is replaced
    console.log(a);
  }
  varGreeter();

  //let
  //block scope
  function varGreeter2(){
    let a = 10;        
    let a = 20; //SyntaxError: 
   //Identifier 'a' has already been declared
    console.log(a);
  }
  varGreeter2();