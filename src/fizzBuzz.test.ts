import { fizzBuzz } from "./fizzBuzz";

test(`fizzBuzz returns a string of numbers from 1 to 'n' separated by a comma, where: numbers divisible by 3 are replaced with "Fizz", numbers divisible by 3 are replaced with "Buzz" and numbers divisible by both 3 and 5 are replaced with "FizzBuzz"`, () => {
  
  //Test for regular inputs
  expect(fizzBuzz(1)).toBe("1");
  expect(fizzBuzz(10)).toBe("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz");
  expect(fizzBuzz(15)).toBe("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz");

  //Test for integers that are not multiples of 3 or 5
  expect(fizzBuzz(35).split(",")[33]).toBe("34");
  expect(fizzBuzz(1000).split(",")[997]).toBe("998");

  //Test for random multiples of 3
  expect(fizzBuzz(100).split(",")[98]).toBe("Fizz");
  expect(fizzBuzz(1000).split(",")[191]).toBe("Fizz");

  //Test for random multiples of 5
  expect(fizzBuzz(100).split(",")[64]).toBe("Buzz");
  expect(fizzBuzz(1000).split(",")[499]).toBe("Buzz");

  //Test for random multiples of 3 and 5
  expect(fizzBuzz(100).split(",")[89]).toBe("FizzBuzz");
  expect(fizzBuzz(1000).split(",")[299]).toBe("FizzBuzz");

  //Test for invalid inputs
  expect(fizzBuzz(0)).toBe("");
  expect(fizzBuzz(-1)).toBe("");
});