const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
} = require("../challenges/week9");

describe("return sum of any numbers which are a multiple of 3 or 5", () => {
    test("returns sum of 3,6 and 10", () => {
        expect(sumMultiples([3, 6, 8, 2, 10, 1])).toBe(19);
    });

    test("returns sum of 15,5,3 and 9", () => {
        expect(sumMultiples([4, 15, 5, 3, 7, 11, 9])).toBe(32);
    });
});

describe("A valid DNA string may contain characters C, G, T or A only", () => {
    test("returns true", () => {
        expect(isValidDNA("TGAC")).toBe(true);
    });

    test("returns false", () => {
        expect(isValidDNA("SABT")).toBe(false);
    });
});
