const inquirer = require('inquirer');
//const fs = require('fs');
//const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project.'
      },
      {
        type: 'confirm',
        name: 'table',
        message: 'Would you like to include a table of contents?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation information.'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information.'
      },
      {
        type: 'checkbox',
        name: 'licenses',
        message: 'Which licenses is your project covered under (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter information on how someone can contribute to your project.'
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter any tests that are relevant to your project.'
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
      },
      {
        type: 'input',
        name: 'username',
        message: 'Enter your github username.'
      }
    ]);
  };

promptUser();
/*
  promptUser()
  .then(promptProject)
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile('./README.md', pageHTML, err => {
       if (err) throw new Error(err);

       console.log('Page created! Check out README.md in this directory to see it!');
     });
  });

/*
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
*/