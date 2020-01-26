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
    test("returns username beth_1234", () => {
        const users = [
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
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    });
    test("returns usernames beth_1234 and sam_j_1989", () => {
        const users = [
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
        expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234", "sam_j_1989"]);
    });
    test("returns usernames, empty", () => {
        const users = [
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
        expect(getScreentimeAlertList(users, "2019-06-13")).toEqual([]);
    });
});

describe("Turns hexadecimal code to RGB code", () => {
    test("returns rgb(255,17,51)", () => {
        expect(hexToRGB("#FF1133")).toEqual("rgb(255,17,51)");
    });
    test("returns rgb(255,51,0)", () => {
        expect(hexToRGB("#FF3300")).toEqual("rgb(255,51,0)");
    });
    test("returns rgb(128,0,128)", () => {
        expect(hexToRGB("#800080")).toEqual("rgb(128,0,128)");
    });
});

describe("Returns X is X wins, 0 if 0 wins, null if no winner", () => {
    test("returns X", () => {
        const board = [
            ["X", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(board)).toEqual("X");
    });
    test("returns 0", () => {
        const board = [
            ["0", "0", null],
            ["X", "0", "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(board)).toEqual("0");
    });
    test("returns null", () => {
        const board = [
            ["0", "0", null],
            ["X", null, "0"],
            ["X", null, "0"]
        ]
        expect(findWinner(board)).toEqual(null);
    });
});