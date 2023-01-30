/**
 * Given an integer 'n', fizzBuzz returns a string of numbers from 1 to 'n' separated by a comma, where: numbers divisible by 3 are replaced with "Fizz", numbers divisible by 3 are replaced with "Buzz" and numbers divisible by both 3 and 5 are replaced with "FizzBuzz"
 * @param n - input integer
 * @returns a string containing incrementing numbers, "fizz", "buzz" and "fizzBuzz"
 */

export const fizzBuzz = (n: number): string => {

  const fizzBuzzArr = []

  for (let i = 1; i <= n; i++) {
    const isDivisibleByThree = i % 3 === 0
    const isDivisibleByFive = i % 5 === 0

    if (isDivisibleByThree && isDivisibleByFive) {
      fizzBuzzArr.push("FizzBuzz")
    } else if (isDivisibleByThree) {
      fizzBuzzArr.push("Fizz")
    } else if (isDivisibleByFive) {
      fizzBuzzArr.push("Buzz")
    } else {
      fizzBuzzArr.push(i)
    }
  }

  const fizzBuzzString = fizzBuzzArr.join(",")
  return fizzBuzzString
}