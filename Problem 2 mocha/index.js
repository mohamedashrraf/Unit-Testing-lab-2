//problem 2
//mocha,chai
// input number 3 ==> output should be [0,1,2]
//4-->[0,1,2,3]
//7=>[0,1,2,--->6]

const createArray = (number) => {
    const myArray = Array.from(Array(number).keys());
    return myArray;
};

module.exports = {
    createArray,
};

//test that the return value of type array
//test if we pass 3 it will return array of length 3 and test it's include 1
//make a variable and intialize it by 1 and before each test increase it by one and pass it to every function call
//try to use different styles (expect , should , assert)
//make pending test case
