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
    test("returns an array in steps of 2", () => {
        expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    });

    test("returns an array in steps of 1", () => {
        expect(createRange(3, 9)).toEqual([3, 4, 5, 6, 7, 8, 9]);
    });

    test("returns an array in steps of 3", () => {
        expect(createRange(3, 15, 3)).toEqual([3, 6, 9, 12, 15]);
    });
});

describe("returns an array of usernames of users with over 100 hours of screentime on given date", () => {
    test("returns usernames", () => {
        [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList("2019-05-04")).toBe(["beth_1234"]);
    });
    test("returns usernames", () => {
        [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-05-04", usage: { mapMyRun: 91, whatsApp: 10, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList("2019-05-04")).toBe(["beth_1234", "sam_j_1989"]);
    });
    test("returns usernames", () => {
        [
            {
                username: "beth_1234",
                name: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 10, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList("2019-06-13")).toBe([""]);
    });

});
