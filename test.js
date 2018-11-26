var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.sayHiTo = function (name) {
        console.log("Hi ", name);
    };
    return Person;
}());
var receptionist = new Person();
receptionist.sayHiTo("Johnny Bravo");
