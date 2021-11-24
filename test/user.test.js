const User = require('../src/user')

describe('User class', () => {
    
    test('is an instance of a User', () => {
        const testUser = new User("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testUser instanceof User).toBeTruthy()
    })
    test('has a name', ()=>{
        const testUser = new User("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testUser.name).toBe("Ann")
    })
    test('has a license', ()=> {
        const testUser = new User("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testUser.license).toBe("07532118")
    })
    test('has a email', ()=> {
        const testUser = new User("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testUser.email).toBe("anab@hotmail.com")
    })
    test('has a phone', ()=> {
        const testUser = new User("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testUser.phone).toBe("214-255-5555")
    })
        test("A user must have an age that is 18 or older", () => {
        const name = "John";
        const license = "1234";
        const email = "mark@me.com";
        const phone = "555-555-5555";
        const ageA = 15;
        const ageB = 20;
        expect(() => new User(name, license, email, phone, ageA)).toThrowError("user must be 18 or older");
        const testUser = new User(name, license, email, phone, ageB);
        expect(testUser.age).toBe(ageB)
    })
        test("Add a payment method", () => {
        const paymentMethod = "VISA"
        const testUser = new User("Ann","07532118","anab@hotmail.com","214-255-5555","18")
        expect(testUser.paymentMethods.length).toBe(0)
        testUser.addPaymentMethod(paymentMethod)
        expect(testUser.paymentMethods[0]).toBe("VISA")
        })

})


//let testUser1 = new User("Ann","07532118","anab@hotmail.com","214-255-5555","18");
//let testUser2 = new User("Adam","12345678","adamk@aol.com","355-555-5555",'16');
