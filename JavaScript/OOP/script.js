// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript

/**
 * Person 
 */
// Constructor
var Person = function (firstName) {
    this.firstName = firstName
}

// Methods
Person.prototype.walk = function () {
    console.log("I'm walking!")
}

Person.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName)
}

/**
 * Student
 */
// Constructor
function Student(firstName, subject) {
    // Call parent constructor
    Person.call(this, firstName)

    this.subject = subject
}

// Inheritance
Student.prototype = Object.create(Person.prototype)
Student.prototype.constructor = Student // Refer to Student

// Replace method from Person
Student.prototype.sayHello = function () {
    console.log("Hello, I'm " + this.firstName + ". I'm studying "
        + this.subject + ".")
}

// Add another method
Student.prototype.sayGoodBye = function () {
    console.log("Goodbye!")
}

/**
 * EXAMPLES
 */
var person1 = new Person('Alice')
var person2 = new Person('Bob')
var helloFunction = person1.sayHello

// Person introduces himself
person1.sayHello
person2.sayHello

// Will fail somehow
helloFunction()

// true
console.log(helloFunction === person1.sayHello)
console.log(helloFunction === Person.prototype.sayHello)

// 'Hello...'
helloFunction.call(person1)

// A student
var student1 = new Student("Janet", "Applied Physics")
student1.sayHello() // "Hello... student"
student1.walk() // "I'm walking"
student1.sayGoodBye() // Goodbye

// Check instanceof
console.log(student1 instanceof Person) // true
console.log(student1 instanceof Student) // true
