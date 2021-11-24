const MobileApp = require('../src/mobileapp');

describe("MobileApp class", () => {
    const testMobileApp = new MobileApp();
    test("Creates a app instance", () => {
        expect(testMobileApp).toBeDefined();
        expect(testMobileApp instanceof MobileApp).toBeTruthy();
    });
});