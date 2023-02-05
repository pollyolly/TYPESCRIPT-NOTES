
//Any Type
let val: any = 'Hi';  
      val = 555;   // OK  
      val = true;   // OK           
function ProcessData(x: any, y: any) {  
                       return x + y;  
            }  
            let result: any;  
            result = ProcessData("Hello ", "Any!"); //Hello Any!  
            result = ProcessData(2, 3); //5  
            
