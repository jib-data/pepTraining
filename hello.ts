// let message: string;
// message = "Hello Typescript";
// console.log(message);

// FizzBuzz
function FizzBuzz(value: number): string[] {
  let index: number = 0;
  let result: string[] = [];
  while (index < value) {
    if (index % 3 == 0 && index % 5 == 0) {
      result.push("FizzBuzz");
    } else if (index % 3 == 0) {
      result.push("Fizz");
    } else if (index % 5 == 0) {
      result.push("Buzz");
    }
    index++;
  }

  return result;
}

let fizzBuzz: string[] = FizzBuzz(20);
// console.log(fizzBuzz);

class Person {}
let myArray: string[];

myArray = [];
console.log(myArray);
