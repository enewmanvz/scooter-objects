const ChargeStation = require("../src/chargestation");

describe("ChargeStation class", () => {
    
    test("Creates a chargestation instance", () => {
        const testChargeStation = new ChargeStation("Harwin",20);
        expect(testChargeStation).toBeDefined();
        expect(testChargeStation instanceof ChargeStation).toBeTruthy();
    });
    test("Creates a chargestation instance", () => {
        expect(() => new ChargeStation()).toThrowError("station must have location");
        const testChargeStation = new ChargeStation("Harwin",20);
        expect(testChargeStation.locationAddress).toBe("Harwin");
    
    });     
});