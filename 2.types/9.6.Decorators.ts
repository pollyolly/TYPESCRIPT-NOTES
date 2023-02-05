//Decorators
function f() {  
    console.log("f(): evaluated");  
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {  
        console.log("f(): called");  
    }  
}  
  
class C {  
    @f()  
    method() {}  
}  

/*
 * Decorators
 */
function testDecorator(value: boolean){
    console.log("testDecorator(): evaluated");  
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {  
        console.log("testDecorator(): called");  
        console.log("Target: "+target);  
        descriptor.testDecorator = value;
    }  
}

class DecoratorClass 
{

    @testDecorator(false)
    test(): void{
        console.log('test Decorator');
    }
}
// let obj = new DecoratorClass();
// obj.test();
