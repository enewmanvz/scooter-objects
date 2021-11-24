const ChargeStation = require("../src/chargestation");

describe("ChargeStation class", () => {
    const testChargeStation = new ChargeStation("Kiest",20);
    test("Creates a chargestation instance", () => {
        expect(testChargeStation).toBeDefined();
        expect(testChargeStation instanceof ChargeStation).toBeTruthy();
    });
    test("Creates a chargestation instance", () => {
        expect(() => new ChargeStation()).toThrowError("station must have location");
        expect(testChargeStation.locationAddress).toBe("Kiest");
    
    });     
});