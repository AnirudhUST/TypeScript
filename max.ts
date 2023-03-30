/*2.Implement a function in TypeScript to find the maximum value in an array of numbers. 
The function should take an array of numbers as input and return the maximum value.*/



function findMaxValue(numbers: number[]): number {
    let maxValue = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxValue) {
        maxValue = numbers[i];
      }
    }
  
    return maxValue;
  }
  const numbers = [3, 8, 1, 6, 2, 9, 4, 7, 5];
  const max = findMaxValue(numbers);
  console.log(max); 
  