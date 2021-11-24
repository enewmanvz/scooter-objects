const Scooter= require('./scooter')
const User = require('./user')

class MobileApp {
    constructor(name,license,email,phone){
        super(name,license,email,phone)
        this.paymentMethods= []
        this.rentHistory = []
        this.currentScooters = []
    }

    addPaymentMethod(methodName){
        this.paymentMethods.push(methodName);
    }
}


let testPerson1 = new User("Ann","07532118","anab@hotmail.com","214-255-5555");
let testPerson2 = new User("Adam","12345678","adamk@aol.com","355-555-5555");
console.log(Person.people);

module.exports = User