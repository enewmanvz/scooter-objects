class Scooter {
    static currentId = 0;

	constructor(maxRange=32) {
		this.maxRange = maxRange
		this.batteryLevel = 0
		this.status = "outofservice"
        this.location = 'gps'
		this.id = this.constructor.currentId++;
	}

	setStatus(status) {
		this.status = status
	}
//create method to checkout and return scooter, generate alert(may go in App)
	setRecharge() {
		this.batteryLevel = 100
        this.setStatus("inservice")
	}
	
}

module.exports = Scooter