#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "firstNumber",
        message: "Please Enter the first Number",
        type: "number",
    },
    {
        message: "Please Enter the Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        name: "operator",
        message: "Choose one of the operators to perform operation",
        type: "list",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Module",
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Module") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("Select a valid operator");
}
;
