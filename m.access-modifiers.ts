//TypeScript Access Modifiers
//Understanding all TypeScript access modifiers
//Public
class Student {  
    public studCode: number;  
    studName: string;  
}  
  
let stud = new Student();  
stud.studCode = 101;  
stud.studName = "Joe Root";  
  
console.log(stud.studCode+ " "+stud.studName);  
//Private
class Student {  
    public studCode: number;  
    private studName: string;  
    constructor(code: number, name: string){  
    this.studCode = code;  
    this.studName = name;  
    }  
    public display() {  
    return (`My unique code: ${this.studCode}, my name: ${this.studName}.`);  
    }  
    }  
      
    let student: Student = new Student(1, "JoeRoot");  
    console.log(student.display());  

//Protected
class Student {  
    public studCode: number;  
    protected studName: string;  
    constructor(code: number, name: string){  
        this.studCode = code;  
        this.studName = name;  
        }  
}  
class Person extends Student {  
    private department: string;  
  
    constructor(code: number, name: string, department: string) {  
        super(code, name);  
        this.department = department;  
    }  
    public getElevatorPitch() {  
        return (`My unique code: ${this.studCode}, my name: ${this.studName} and I am in ${this.department} Branch.`);  
    }  
}  
let joeRoot: Person = new Person(1, "JoeRoot", "CS");  
console.log(joeRoot.getElevatorPitch());  

//Readonly Modifier
class Company {  
    readonly country: string = "India";  
    readonly name: string;  
      
    constructor(contName: string) {  
    this.name = contName;  
    }  
    showDetails() {  
    console.log(this.name + " : " + this.country);  
    }  
   }  
      
   let comp = new Company("JavaTpoint");  
   comp.showDetails(); // JavaTpoint : India  
      
   comp.name = "TCS"; //Error, name can be initialized only within constructor  