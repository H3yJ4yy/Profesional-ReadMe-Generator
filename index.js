// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
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
        message: 'Describe your project and what it can specifically do.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Describe how to use your project.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Describe what needs to be installed as well as the steps on doing so.',
        name: 'usage'
    },
    {
        type: 'checkbox',
        message: 'Select which licenses is applicable to this project.',
        name: 'license',
        choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License','BSD 2-Clause "Simplified" Licence','BSD 3-Clause "New" or "Revised" Licence','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public Licence 2.0','GNU Affero General Public License v3.0','GNU General Public License v2.0','GNU Lesser General Public License v2.1','Mozilla Public License 2.0','none']
    }
    {
        type: 'input',
        message: 'List any conntributers (enter GitHub usernames).',
        name: 'contributing'
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
    },
])

// TODO: Create a function to write README file
// function writeToFile(fileName, data){}
.then(responses => {
    fs.writeFile('README.md', generateMarkdown(responses),(err)=> {
        err ? console.error(err) : console.log("Awesome! you created your ReadMe!")
    })
})
}
// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
init();
