var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function welcomeGuest(configObject) {
    return function (target, propertyKey, descriptor) {
        // console.log("I am a decorator");
        // console.log("target", target);
        target.welcomeGuest = function () {
            console.log("Welcome Guest!", "Your gender is", configObject.gender);
        };
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHelloToGuest = function () {
        console.log("Hello Guest!");
    };
    __decorate([
        welcomeGuest({ gender: "Female" })
    ], Person.prototype, "sayHelloToGuest");
    return Person;
}());
new Person().sayHelloToGuest();
new Person().welcomeGuest();
