"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, gender, height, hobbies, birthday, isAlive) {
        if (height === void 0) { height = -1; }
        if (hobbies === void 0) { hobbies = []; }
        if (isAlive === void 0) { isAlive = true; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.gender = gender;
        this.height = height;
        this.hobbies = hobbies;
        this.birthday = birthday;
        this.isAlive = isAlive;
    }
    return Person;
}());
exports.Person = Person;
;
//Accessing object properties
var firstName = "Pius";
var lastName = "Onobhayedo";
var gender = "male";
var height = 1.7;
var hobbies = ['Tennis', 'Programming'];
var birthday = new Date(1900, 4, 5);
var isAlive = true;
var person1 = new Person(firstName, lastName, gender, height, hobbies, birthday, isAlive);
console.log("Person 1 is " + person1.firstName + " whose height is " + person1.height + " and birthday is $ {person1.birthday.toLocaleDateString()}");
