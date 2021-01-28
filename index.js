
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown");

const questions = [
    {
        type: 'input',
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: 'input',
        message: "Provide a brief discription of your project:",
        name: "description"
    },
    {
        type: 'input',
        message: "How do you install your app?:",
        name: "install"
    },
    {
        type: 'input',
        message: "How do you use your app?",
        name: "usage"
    },
    {
        type: 'list',
        message: "Which license are you using?",
        name: "license",
        choices: [
            "license",
            "none"
        ]
    },
    {
        type: 'input',
        message: "What were the contributions?",
        name: "contributions"
    },
    {
        type: 'input',
        message: "Test instructions:",
        name: "test"
    },
    {
        type: 'input',
        message: "What is your GitHub name?",
        name: "github"
    },
    {
        type: 'input',
        message: "What is your email?",
        name: "email"
    },

]

function writeToFile(fileName, data,) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("Sucess!");
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        const data = generateMarkdown(answers);
        console.log(answers);

        writeToFile("MYREADME.md", data);
    })
}
init();






