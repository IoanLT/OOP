
// let person = {
//     name: 'Nelu',
//     age: 18,
//     pets: ['dog', 'cat'],
//     city: {
//         location: 'Comanesti'
//     },
//     sayHello: function(){
//         return 'Hello!';
//     }
// };

// console.log(person.sayHello());


// Classes

// class Person {

//     constructor(firstName, city) {
//         this.firstName = firstName;
//         this.city = city;
//         this.profession = 'developer';
//     };

//     sayHello() {
//         return `Hello ${this.firstName}`;
//     }
// }

// const nelu = new Person('Nelu', 'Comanesti');
// console.log(nelu);

// Person.prototype.hobbies = ['surf', 'ski'];
// console.log(Person);


// Inheritence

class Vehicle {

    constructor(color, model, type) {
        this.color = color;
        this.model = model;
        this.type = type;
    }

    display() {
        return `${this.type}: ${this.model} and ${this.color}`;
    }

}

class Car extends Vehicle {

    constructor(color, model) {
        super(color, model, 'car');
    }

    lock() {
        return `Your ${this.model}: ${this.color} is now locked!`;
    }

    display() {
        return `${this.type}: ${this.model} and ${this.color}`;
    }

}

// const vehicle = new Vehicle('blue', 'BMW', '3 series');
// console.log(vehicle.display());

const myCar = new Car('red', 'Toyota');
console.log(myCar.lock());
console.log(myCar.display());




















