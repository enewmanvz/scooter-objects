class ChargeStation {
    static currentId = 0;
    static stations = [];

	constructor(locationID, spaceCapacity) {
		if (locationID === undefined) throw new Error("station must have location");
        this.locationID = locationID;
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