// We declare a class called person
// The person class has a constructor that accepts a parameter name and sets the name property on the class to the received argument 
// The person class also has a introduceSelf method that console logs a message with the name property 

class Person {
    constructor (name) {
        this.name = name;
    }

    introduceSelf(){
        console.log(`Hi! I'm ${this.name}`);
    }
}

