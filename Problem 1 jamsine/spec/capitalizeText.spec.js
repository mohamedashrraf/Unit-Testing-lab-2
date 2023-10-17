const { capitalizeText } = require("../index.js");

describe("capitalizeText function", () => {
    it("should take a string and return a string", () => {
        expect(typeof capitalizeText("hamada")).toBe("string");
    });

    it("should take a string and return it after capitalizing it", () => {
        expect(capitalizeText("hamada")).toBe("HAMADA");
    });

    it("should throw a type error if the parameter is not a string", () => {
        expect(() => capitalizeText(12)).toThrowError(TypeError, "parameter should be string");
    });
});
