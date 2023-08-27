import { add } from './add.js';
import { sub } from './sub.js';
import { multi } from './multi.js';
import { div } from './div.js';
import inquirer from 'inquirer';
let answer = await inquirer.prompt([
    {
        message: "Enter your 1st number",
        type: "number",
        name: "1stnum"
    },
    {
        message: "Enter your 2nd number",
        type: "number",
        name: "2ndnum"
    },
    {
        message: "Select your operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        name: "operator"
    },
]);
if (answer.operator === "+") {
    let result = add(answer['1stnum'], answer['2ndnum']);
    console.log(result);
}
else if (answer.operator === "-") {
    let result1 = sub(answer['1stnum'], answer['2ndnum']);
    console.log(result1);
}
else if (answer.operator === "*") {
    let result2 = multi(answer['1stnum'], answer['2ndnum']);
    console.log(result2);
}
else if (answer.operator === "/") {
    let result3 = div(answer['1stnum'], answer['2ndnum']);
    console.log(result3);
}
