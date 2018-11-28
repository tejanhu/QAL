function welcomeGuest(configObject){
    return function(target, propertyKey: string, descriptor: PropertyDescriptor){
        // console.log("I am a decorator");
        // console.log("target", target);
        target.welcomeGuest = function(){
            console.log("Welcome Guest!", "Your gender is", configObject.gender);
        }
    }
}

class Person{
    @welcomeGuest({gender:"Female"})
    sayHelloToGuest(){
        console.log("Hello Guest!");
    }
}

new Person().sayHelloToGuest();
new Person().welcomeGuest();