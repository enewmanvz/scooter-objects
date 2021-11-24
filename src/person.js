class Person {
    static currentId = 0;
    static people = [];
    constructor(name,license,email,phone) {
        if (name === undefined) throw new Error("person must have a name");
        this.name = name;
        this.license = license;
        this.email = email;
        this.phone = phone;
        this.id = this.constructor.currentId++;

        this.constructor.people.push(this);
        
    }
}

//let testPerson1 = new Person("Ann","07532118","anab@hotmail.com","214-255-5555");
//let testPerson2 = new Person("Adam","12345678","adamk@aol.com","355-555-5555");
//console.log(Person.people);

module.exports = Person;