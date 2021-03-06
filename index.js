//Required Packages

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

//Questions for the generation of the read me file

const questions = [
    {
        type: 'input',
        message: 'Please type out the name of your project.',
        name:  'title',
        validate: titleInput => {
            if (titleInput) {
              return true;
            } else {
              console.log('Please type out the name of your project.');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'Please Explain what your project is used for.',
        name:  'description',
        validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('Please Explain what your project is used for.');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'Please list the intructions to install and run your application!',
        name:  'installation',
        validate: installationInput => {
            if (installationInput) {
              return true;
            } else {
              console.log('Please list the intructions to instal and run your application!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'What is primary use case for your application?',
        name:  'usage',
        validate: usageInput => {
            if (usageInput) {
              return true;
            } else {
              console.log('What is primary use case for your application?');
              return false;
            }
          }
    },
    {
        type: 'list',
        message: 'Which lisence would you like to use?',
        name:  'license',
        choices: ['MIT', 'MPL', 'Apache', 'None']
    },
    {
        type: 'input',
        message: 'Who contributed to your project?',
        name:  'contributing',
        validate: contributingInput => {
            if (contributingInput) {
              return true;
            } else {
              console.log('Please list the contributers to your project.');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'What commands do you use to run a test on your project?',
        name:  'tests',
        validate: testInput => {
            if (testInput) {
              return true;
            } else {
              console.log('Please describe which commands you need to run a test!');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'Enter your GitHub username.',
        name:  'github',
        validate: githubInput => {
            if (githubInput) {
              return true;
            } else {
              console.log('Enter your GitHub username.');
              return false;
            }
          }
    },
    {
        type: 'input',
        message: 'Enter your email?',
        name:  'email',
        validate: emailInput => {
            if (emailInput) {
              return true;
            } else {
              console.log('Enter your email?');
              return false;
            }
          }
    },
    
];


// function for writing the file

function writeToFile(fileName, data) {
    fs.writeFile("./read-me-files/"+fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
    })
}

// function that initializes the application


function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
