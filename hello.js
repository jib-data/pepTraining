// let message: string;
// message = "Hello Typescript";
// console.log(message);
// FizzBuzz
function FizzBuzz(value) {
    var index = 0;
    var result = [];
    while (index < value) {
        if (index % 3 == 0 && index % 5 == 0) {
            result.push("FizzBuzz");
        }
        else if (index % 3 == 0) {
            result.push("Fizz");
        }
        else if (index % 5 == 0) {
            result.push("Buzz");
        }
        index++;
    }
    return result;
}
var fizzBuzz = FizzBuzz(20);
// console.log(fizzBuzz);
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var myArray;
myArray = [];
console.log(myArray);
