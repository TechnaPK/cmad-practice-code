class Person {

    constructor(firstName, lastName, age) {

        this.firstName = firstName
        this.lastName = lastName
        this.age = age

    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

}


var user1 = new Person("Umar", "Ahmad", 22);
var user2 = new Person("Ali", "Raza", 25);
var user3 = new Person("Ahmad", "Raza", 15);

console.log(user1)







// Javascript Class Inheritance
// https://www.w3schools.com/js/js_class_inheritance.asp

// Inheritance can be used to create new classes from existing classes 
// It will allow us to use all the methods which is already defined in other class.


// To create a class inheritance, use the extends keyword.
// A class created with a class inheritance inherits all the methods from it's parent class:

// class SuperHuman extends Person {

//     sayHi() {
//         console.log("Hi everyone!");
//     }

// }

// var user4 = new SuperMan("Hassan", "Ali", 26 );

// console.log(user4)







// SuperHuman with Additional Properties
// The super keyword is used to call the constructor of the parent class.
// class SuperHuman extends Person {

//     constructor(firstName, lastName, age, type) {
//         super(firstName, lastName, age);
//         this.type = type;
//     }

//     sayHi() {
//         console.log("Hi everyone!");
//     }

// }

// var user5 = new SuperHuman("Adeel", "Ali", 26, "SuperMan");









// SuperHuman with Getters and Setters
// Note: even if the getter is a method, you do not use parentheses when you want to get the property value.
// class SuperHuman extends Person {

//     constructor(firstName, lastName, age, type) {
//         super(firstName, lastName, age);
//         this.type = type;
//     }

//     get userType() {
//         return this.type;
//     }

//     set userType(type) {
//         this.type = type;
//     }

//     sayHi() {
//         console.log("Hi everyone!");
//     }

// }

// var user6 = new SuperHuman("Adeel", "Ali", 26, "SuperMan");


