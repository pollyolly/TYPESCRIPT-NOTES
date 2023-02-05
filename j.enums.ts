//TypeScript Enums
//Numeric Enums
enum Direction {  
    Up = 1,  
    Down,  
    Left,  
    Right,  
}  
console.log(Direction); 

enum Direction {  
    Up,  
    Down,  
    Left,  
    Right,  
}  
  
console.log(Direction);  

enum Direction {  
    Up=1,  
    Down=3,  
    Left=6,  
    Right=10,  
}  
console.log(Direction);  

//Enum as a function argument
enum AppStatus {  
    ACTIVE,  
    INACTIVE,  
    ONHOLD  
}   
function checkStatus(status: AppStatus): void {  
    console.log(status);  
}  
checkStatus(AppStatus.ONHOLD);  

//String Enums
enum AppStatus {  
    ACTIVE = 'ACT',  
    INACTIVE = 'INACT',  
    ONHOLD = 'HLD',  
    ONSTOP = 'STOP'  
}  
function checkStatus(status: AppStatus): void {  
   
    console.log(status);  
}  
checkStatus(AppStatus.ONSTOP);  

//Heterogeneous Enums
enum AppStatus {  
    ACTIVE = 'Yes',  
    INACTIVE = 1,  
    ONHOLD = 2,  
    ONSTOP = 'STOP'  
}  
console.log(AppStatus.ACTIVE);  
console.log(AppStatus.ONHOLD);  

//Computed and constant members
enum Weekend {  
    Friday = 1,  
    Saturday = getDate('Dominoz'),  
    Sunday = Saturday * 40  
  }  
    
  function getDate(day : string): number {  
      if (day === 'Dominoz') {  
          return 3;  
      }  
  }  
  console.log(Weekend.Saturday);   
  console.log(Weekend.Sunday);  

  //Reverse mapping
  enum Weekend {  
    Friday = 1,  
    Saturday,  
    Sunday  
  }  
  console.log(Weekend.Saturday);     
  console.log(Weekend["Saturday"]);    
  console.log(Weekend[3]);  

  //Enums at runtime
  enum E {  
    A, B, C  
}  

function f(obj: { A: number }) {  
    return obj.A;  
}  
// Works, since 'E' has a property named 'A' which is a number.  
f(E);  

//Ambient enums
Declare enum Enum{  
    X=1,  
    Y,  
    Z=2  
}  