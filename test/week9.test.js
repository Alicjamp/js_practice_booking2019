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

    test("returns true", () => {
        expect(isValidDNA("GCCTTGACAA")).toBe(true);
    });

    test("returns false", () => {
        expect(isValidDNA("SABT")).toBe(false);
    });
});

describe("T always pairs with A, and C always pairs with G",  () => {
    test("a string of ACTG would have a complementary DNA string of TGAC", () => {
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });

    test("returns false", () => {
        expect(getComplementaryDNA("SABT")).toBe("Not Valid");
    });
});

describe("receive a number and return true/false depending on whether it is a prime number or not", () => {
    test("returns true", () => {
        expect(isItPrime(4)).toBe(false);
    });

    test("returns false", () => {
        expect(isItPrime(12)).toBe(false);
    });

    test("returns false", () => {
        expect(isItPrime(7)).toBe(true);
    });
});

describe("Return n by n matrix using fill as a string", () => {
    test("returns 3 by 3 matrix and foo as filler", () => {
        expect(createMatrix(3, "foo")).toEqual(
            [
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"],
                ["foo", "foo", "foo"]
            ]);
    });

    test("returns 2 by 2 matrix and tim as filler", () => {
        expect(createMatrix(2, "tim")).toEqual(
            [
                ["tim", "tim"],
                ["tim", "tim"]
            ]);
    });
});


describe("areWeCovered return true or false if at least 3 available per day", () => {
    test("returns false if less than 3 staff available", () => {
        const staff = [
            {
                name: "Sally",
                rota: ["Monday", "Tuesday", "Friday"]
            },
            {
                name: "Pedro",
                rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
            },
            {
                name: "Jocelyn",
                rota: ["Saturday", "Sunday", "Thursday", "Monday"]
            },
            {
                name: "Dylan",
                rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
            },
            {
                name: "Sienna",
                rota: ["Saturday", "Sunday"]
            }
        ];

        expect(areWeCovered(staff, "Wednesday")).toBe(false);
    });

    test("returns true if 3 or more staff available", () => {
        const staff = [
            {
                name: "Sally",
                rota: ["Monday", "Tuesday", "Friday"]
            },
            {
                name: "Pedro",
                rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
            },
            {
                name: "Jocelyn",
                rota: ["Saturday", "Sunday", "Thursday", "Monday"]
            },
            {
                name: "Dylan",
                rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"]
            },
            {
                name: "Sienna",
                rota: ["Saturday", "Sunday"]
            }
        ];

        expect(areWeCovered(staff, "Sunday")).toBe(true);
    });
});







