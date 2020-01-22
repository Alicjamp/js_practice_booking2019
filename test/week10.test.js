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

    test("returns sum of 15,5,3 and 9", () => {
        expect(sumDigits(0)).toBe(0);
    });
});

describe("create an array giving the start and end and step, if no step given then step is 1", () => {
    test("returns an array", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    });

    test("rreturns an array", () => {
        expect(createRange(3, 9)).toEqual([3, 4, 5, 6, 7, 8, 9]);
    });

    test("rreturns an array", () => {
        expect(createRange(3, 15, 3)).toEqual([3, 6, 9, 12, 15]);
    });
});
