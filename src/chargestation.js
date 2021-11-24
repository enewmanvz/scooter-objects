class ChargeStation {
    static currentId = 0;
    static stations = [];

	constructor(locationAddress, spaceCapacity) {
		if (locationAddress === undefined) throw new Error("station must have location");
        this.locationAddress = locationAddress;
        this.spaceCapacity = spaceCapacity;
        this.id = this.constructor.currentId++;

        this.scooters = []

        this.constructor.stations.push(this);
                      
        
	}

	addScooter(scooter) {
		this.scooters.push(scooter)
	}
}
//let station1 = new ChargeStation('001',20);
//let station2 = new ChargeStation('002',10);
//station1.addScooter('redscooter')
//console.log(ChargeStation.stations);


module.exports = ChargeStation