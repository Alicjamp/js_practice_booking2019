const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner
} = require("../challenges/week10");

describe("takes a number and sums all the digits", () => {
    test("returns sum of 3,6 and 10", () => {
        expect(sumDigits(123)).toBe(6);
    });

    test("returns sum of 15,5,3 and 9", () => {
        expect(sumDigits(9928)).toBe(28);
    });
});
