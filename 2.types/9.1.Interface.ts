//Interface
interface Calc {  
    subtract (first: number, second: number): any;  
}  
   
let calculator: Calc = {  
    subtract(first: number, second: number) {  
        return first - second;  
    }  
}  

console.log(calculator.subtract(5, 7));

//Interface for Objects 
interface Person {
    first_name: string,
    middle_name: string,
    last_name: string,
    age: number
}

function personInfo(info: Person){
    let checkAge = info.age < 18 ? 'Minor':'Old'
    let details = {
        fullname: info.first_name + info.middle_name + info.last_name,
        age_type: checkAge
    }
    return  'Fullname: '+details.fullname + ' Age: '+details.age_type;
}

let details: Person = {
    first_name: 'Mary',
    middle_name: 'Motin',
    last_name: 'Mindoro',
    age: 28
}

let details1 = <Person> {}
details1.first_name = 'John Mark';
details1.middle_name = ' S';
details1.last_name = ' Roco';

console.log(personInfo(details));
// console.log(personInfo(details1));

//***** Interface Functional
interface Calc {  
    subtract (first: number, second: number): any;  
}  
   
let calculator: Calc = {  
    subtract(first: number, second: number) {  
        return first - second;  
    }  
}  

console.log(calculator.subtract(5, 7));

/*
 * Interface Restrict Datatype Objects 
 * Functional
 */
interface Person {
    first_name: string,
    middle_name: string,
    last_name: string,
    age: number
}

function personInfo(info: Person){
    let checkAge = info.age < 18 ? 'Minor':'Old'
    let details = {
        fullname: info.first_name + info.middle_name + info.last_name,
        age_type: checkAge
    }
    return  'Fullname: '+details.fullname + ' Age: '+details.age_type;
}

let details: Person = {
    first_name: 'Mary',
    middle_name: 'Motin',
    last_name: 'Mindoro',
    age: 28
}

let details1 = <Person> {}
details1.first_name = 'John Mark';
details1.middle_name = ' S';
details1.last_name = ' Roco';

console.log(personInfo(details));
// console.log(personInfo(details1));

/*
 * Interface in Class
 * OOP
 */
interface Grades {
    subject: string,
    grades: number[],
    grade_average: () => number
}
class Card implements Grades {
    subject: string;
    grades: number[];

    constructor(grd: number[]){
        this.grades = grd;
    }
    grade_average(): number {
        let total_grades: number = this.grades.reduce((accumulator, currentValue) =>
            accumulator + currentValue, 0
        );
        return total_grades / this.grades.length;
    }
}

let card =  new Card([75, 80, 90]);
console.log('Grades: '+card.grade_average());

/*
 * Interface, Abstract, Rest Parameter
 */
abstract class PrintReceipt {
    name: string;
    total: number;
    constructor(total_cost: number, cname: string){
        this.total = total_cost;
        this.name = cname;
    }
    display(): void {
        console.log('Name: '+this.name+' Total: '+this.total);
    }
}
interface OrderDetails {
    item: string,
    total_cost: (...cost_item: number[]) => number
}

class Order extends PrintReceipt implements OrderDetails {
    item: string;

    constructor(myitem: string, cname: string, ctotal: number){
        super(ctotal, cname);
        this.item = myitem;
    }

    total_cost(...cost_item: number[]): number { //Rest Parameter (can only be used as parameter in a function(...cost_item))
        let total: number = 0;
        for(var i = 0; i < cost_item.length; i++){
            total += cost_item[i];
        }
        return total;
    }
}
let order = new Order('Soft drinks','Rolly',0);
console.log('My Order: '+order.total_cost(5,6,7,9));
order.display();
