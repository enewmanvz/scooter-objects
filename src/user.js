const Person = require('./person')

class User extends Person {
    constructor(name,license,email,phone,age){
        if (age <18 ) throw new Error("user must be 18 or older");
        super(name,license,email,phone)
        this.paymentMethods= []
        this.rentHistory = []
        this.currentScooters = []
        this.age = age
    }

    addPaymentMethod(methodName){
        this.paymentMethods.push(methodName);
    }
}


//let testPerson1 = new User("Ann","07532118","anab@hotmail.com","214-255-5555","18");
//let testPerson2 = new User("Adam","12345678","adamk@aol.com","355-555-5555",'16');
//console.log(Person.people);

module.exports = User