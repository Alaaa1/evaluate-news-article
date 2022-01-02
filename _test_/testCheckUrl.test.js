import { urlChecker } from "../src/client/js/checkURL";

describe("Testing the url validation functionality", () => {
    test("Testing the checkUrl() function", () => {
        expect(urlChecker).toBeDefined();
    })
});