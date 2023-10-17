//problem 1
//input: "hamada" ===> output: HAMADA. expect
//input: 12 ===> output: "".   expect
//jasmin
const capitalizeText = (input) => {
    if (typeof input !== "string") {
        throw new TypeError("parameter should be string")
    };
    return input.toUpperCase();
};

module.exports = { capitalizeText };


//test that the function takes a string  it will return a string
//test that the function takes a string and return it after capitalize it
//test if the function takes number it will throw type error says parameter should be string
//npx jasmine
