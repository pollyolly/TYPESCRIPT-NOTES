/*
 * Generic make datatype not restricted
 * Generic functions
 */
function inputValue(arg) {
    return arg;
}
var output1 = inputValue("myString"); //Expecting string
var output2 = inputValue(100); //Expecting number
console.log(output1);
console.log(output2);
/*
 *Generic Array Methods
 */
function inputValues(vals) {
    return new Array().concat(vals);
}
// let vals = inputValues<string>([5,6,3,5]); //Error //Expecting string
var numbers = inputValues([5, 6, 3, 5]); //Ok
console.log(numbers);
/*
 * Multiple Type Variables
 */
function inputValues2(vitalstats, name) {
    var vitals = new Array().concat(vitalstats);
    console.log(name);
    console.log(vitals);
}
inputValues2([45, 6, 43, 5], 'rolly');
/*
 * Multiple Type Variables Generic with Non-Generic
 */
function inputValues3(val1, val2) {
    console.log(typeof (val1)); //number
    console.log(typeof (val2)); //string
}
inputValues3(5, 'hellow');
/*
 * Generic Types and Properties
 */
function inputValues4(ids, namess) {
    console.log(ids.toString()); //toString available for all type
    //T support any type
    // console.log(namess.toUpperCase()); //toUpperCase for string type //Error
}
inputValues4(6, 'intoy');
/*
 * Generic Constraints
 */
var Persons = /** @class */ (function () {
    function Persons(name, age) {
        this.name = name;
        this.age = age;
    }
    return Persons;
}());
function displayInfo(per) {
    console.log("Age: ".concat(per.age, " Name: ").concat(per.name));
}
var per = new Persons('Rolly', 29);
displayInfo(per);
/*
 * Generic Class
 */
var Computer = /** @class */ (function () {
    function Computer() {
    }
    Computer.prototype.setValue = function (moni, keyb) {
        this.monitor = moni;
        this.keyboard = keyb;
    };
    Computer.prototype.display = function () {
        console.log("Monitor: ".concat(this.monitor, " Keyboard: ").concat(this.keyboard));
    };
    return Computer;
}());
var comps = new Computer();
comps.setValue('HP', 'Logitech');
comps.display();
var Spec = /** @class */ (function () {
    function Spec() {
    }
    Spec.prototype.spec = function (core, thread) {
        console.log("Core: ".concat(core, " Thread: ").concat(thread));
    };
    return Spec;
}());
var spec = new Spec();
spec.spec(8, '8 thread');
function process(lotsize, stat) {
    console.log("Yahoo ".concat(lotsize, " lotsize"));
    console.log("Google ".concat(stat));
}
var land = process;
land(5, 'pending');
land('age', 3);
