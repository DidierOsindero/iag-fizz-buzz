import { fizzBuzz } from "./fizzBuzz";

test(`Testing for regular inputs`, () => {
  expect(fizzBuzz(1)).toBe("1");
  expect(fizzBuzz(10)).toBe("1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz");
  expect(fizzBuzz(15)).toBe(
    "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz"
  );
});

test(`Testing for integers that are not multiples of 3 or 5`, () => {
  expect(fizzBuzz(35).split(",")[33]).toBe("34");
  expect(fizzBuzz(1000).split(",")[997]).toBe("998");
});

test(`Testing for multiples of 3`, () => {
  expect(fizzBuzz(100).split(",")[98]).toBe("Fizz");
  expect(fizzBuzz(1000).split(",")[191]).toBe("Fizz");
});

test(`Testing for multiples of 5`, () => {
  expect(fizzBuzz(100).split(",")[64]).toBe("Buzz");
  expect(fizzBuzz(1000).split(",")[499]).toBe("Buzz");
});

test(`Testing for multiples of 3 and 5`, () => {
  expect(fizzBuzz(100).split(",")[89]).toBe("FizzBuzz");
  expect(fizzBuzz(1000).split(",")[299]).toBe("FizzBuzz");
});

test(`Testing for invalid inputs`, () => {
  expect(fizzBuzz(0)).toBe("");
  expect(fizzBuzz(-1)).toBe("");
});
