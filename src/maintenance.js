const Person = require('./person')

class Maintenance extends Person {
    constructor(name,position,idNumber){
        super(name)
        this.position = position
        this.idNumber = idNumber
    }
}

module.exports = Maintenance