#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  {message: "enter second number", type: "number", name: "secondNumber"},
  {
    message: "selet one of the operators to perform operator",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multipilication", "division"],
  },
]);

// conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "multipilication"){
    console.log(answer.firstNumber * answer.secondNumber);
}else if (answer.operator === "division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else {
    console.log("please select valid operator")
}
