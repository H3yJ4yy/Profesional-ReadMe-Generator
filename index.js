// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
// const questions = 
function init(){
inquirer
    .prompt([
    {
        type: 'input',
        message: 'Name your project.',
        name: 'title'
    },
    {
        type: 'input',
        message: ' What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe how to use your project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
        name: 'installation'
    },
    {
        type: 'list',
        message: 'Select which licenses is applicable to this project.',
        name: 'license',
        choices: ['Apache License 2.0','BSD 2-Clause License','BSD 3-Clause License','Boost Software License 1.0','GNU AGPL v3.0','GNU GPL v3.0','GNU GPL v2.0','MIT License','Mozilla Public License 2.0','none']
    },
    {
        type: 'input',
        message: 'List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.',
        name: 'credits'
    },
    {
        type: 'input',
        message: 'Describe how to test your project(have an example).',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Enter your github account name',
        name: 'ghUserName'
    }
])

// TODO: Create a function to write README file
// function writeToFile(fileName, data){}
.then(responses => {
    fs.writeToFile("README.md", generateMarkdown(responses),(err) => {
        err ? console.error(err) : console.log("Awesome! you created your ReadMe!")
    })
})
}
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
