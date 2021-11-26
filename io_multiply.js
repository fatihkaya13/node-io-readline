const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

process.stdout.write("let's multiply two numbers ");

rl.question('Please enter the first number : ', firstNumber => {
    rl.question('Please enter the second number : ', secondNumber => {
        let result = firstNumber * secondNumber
        console.log(`The multiplication of two numbers is ${result}`);
        rl.close();
    });
});
