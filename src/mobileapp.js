const Scooter= require('./scooter')
const User = require('./user')

class MobileApp {
    constructor(){
        
    }

    addPaymentMethod(methodName){
        this.paymentMethods.push(methodName);
    }
    verifyAge(age){
        return age >= 18
    }
    registerUser(user){
        if(this.verifyAge(user.age)){
            createUser      
            
        }

        //Todo:register new user 
    }
    signinUser(user){
        //Todo: signin user
    }
    listLocations(){
       //Todo: list available 
    }
        listAvailableScooters(){
       //Todo: list available scooters
    }
    rentScooter(){
        //Todo: rent scooter
    }
    returnScooter(){
        //Todo: return scooter
    }
    reportBroken(){
        //Todo: return scooter require service
    }

}


//let testPerson1 = new User("Ann","07532118","anab@hotmail.com","214-255-5555");
//let testPerson2 = new User("Adam","12345678","adamk@aol.com","355-555-5555");
//console.log(Person.people);

module.exports = MobileApp