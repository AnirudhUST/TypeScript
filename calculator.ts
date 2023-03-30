 /*3. Write a TypeScript program to create a simple calculator. The calculator should have functions to perform basic arithmetic 
  operations such as addition, subtraction, multiplication, and division. 
  The program should prompt the user to enter two numbers and the operation they want to perform. */
  
  
  import * as readline from 'readline';

function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("Cannot divide by zero.");
  }
  return a / b;
}

function calculator(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Enter the first number: ", (num1) => {
    rl.question("Enter the second number: ", (num2) => {
      rl.question("Enter the operation you want to perform (+, -, *, /): ", (operator) => {
        const n1 = Number(num1);
        const n2 = Number(num2);

        let result: number;

        switch (operator) {
          case "+":
            result = add(n1, n2);
            break;
          case "-":
            result = subtract(n1, n2);
            break;
          case "*":
            result = multiply(n1, n2);
            break;
          case "/":
            result = divide(n1, n2);
            break;
          default:
            throw new Error("Invalid operator.");
        }

        console.log(`The result of ${n1} ${operator} ${n2} is ${result}.`);

        rl.close();
      });
    });
  });
}

calculator();