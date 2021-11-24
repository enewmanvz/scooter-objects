const ChargeStation = require("../src/chargestation");

describe("ChargeStation class", () => {
    const testChargeStation = new ChargeStation();
    test("Creates a chargestation instance", () => {
        expect(testChargeStation).toBeDefined();
        expect(testChargeStation instanceof ChargeStation).toBeTruthy();
    });
});