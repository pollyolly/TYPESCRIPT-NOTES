/*
 * Generic make datatype not restricted
 * Generic functions
 */
function inputValue<T>(arg: T): T {  //Accept any Type //Return any Type
    return arg;  
}  
let output1 = inputValue<string>("myString");  //Expecting string
let output2 = inputValue<number>( 100 );  //Expecting number
console.log(output1);
console.log(output2);

/*
 *Generic Array Methods
 */
function inputValues<T>(vals: T[]): T[] {
    return new Array<T>().concat(vals)
}
// let vals = inputValues<string>([5,6,3,5]); //Error //Expecting string
let numbers = inputValues<number>([5,6,3,5]); //Ok
console.log(numbers);

/*
 * Multiple Type Variables
 */
function inputValues2<T, U>(vitalstats: T[], name: U): void {
    let vitals: T[] = new Array<T>().concat(vitalstats);
    console.log(name);
    console.log(vitals);
}
inputValues2<number, string>([45,6,43,5],'rolly');

/*
 * Multiple Type Variables Generic with Non-Generic
 */
function inputValues3<T>(val1: T, val2: string): void {
    console.log(typeof(val1)); //number
    console.log(typeof(val2)); //string
}
inputValues3(5,'hellow');

/*
 * Generic Types and Properties
 */
function inputValues4<T, U>(ids: T, namess: U): void {
    console.log(ids.toString()); //toString available for all type
                                 //T support any type
    // console.log(namess.toUpperCase()); //toUpperCase for string type //Error
}
inputValues4<number, string>(6, 'intoy');
/*
 * Generic Constraints
 */
class Persons {
    name: string
    age: number
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
function displayInfo<T extends Persons>(per: T): void {
    console.log(`Age: ${per.age} Name: ${per.name}`);
}
let per = new Persons('Rolly',29);
displayInfo(per);

/*
 * Generic Class
 */
class Computer<T, U> {
    monitor:T
    keyboard: U

    setValue(moni: T, keyb: U): void{
        this.monitor = moni;
        this.keyboard = keyb;
    }

    display(): void {
        console.log(`Monitor: ${this.monitor} Keyboard: ${this.keyboard}`);
    }
}

let comps = new Computer<string, string>()
comps.setValue('HP','Logitech');
comps.display();

/*
 * Generic Class implements Generic Interface
 */
interface Info<T, U> {
    spec(core: T, thread: U): void;
}
class Spec<T, U> implements Info<T, U>{
    spec(core: T, thread: U): void {
        console.log(`Core: ${core} Thread: ${thread}`);
    }
}
let spec = new Spec<number, string>()
spec.spec(8, '8 thread');
/*
 * Generic Interface
 */
interface Property<T, U> {
    lotsize: T
    stat: U
    // process<T, U>(lotsize: T, stat: U): void;
}
function process<T, U>(lotsize: T, stat: U) : void{
    console.log(`Yahoo ${lotsize} lotsize`);
    console.log(`Google ${stat}`);
}
let lands: Property<number, string> = process;
lands(5, 'pending');
lands('age', 3);