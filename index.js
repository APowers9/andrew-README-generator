

const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();
//sections of README: title, description, table of contents, installation, usage, license, contributing, tests, and questions

prompt ([
    {
        name:'Title',
        message:'Enter the Title for your README',
    },
    {
        name:'Description',
        message:'Enter the Description for your README',
    },
    {
        name:'Table of Contents',
        message:'Enter the Table of Contents for your README',
    },
    {
        name:'Installation',
        message:'Enter the Installation instructions for your README',
    },
    {
        name:'Usage',
        message:'Enter the Usage information for your README',
    },
    {
        name:'License',
        message:'Enter the License for your README',
    },
    {
        name:'Contributing',
        message:'Enter the Contribution guidelines for your README',
    },
    {
        name:'Tests',
        message:'Enter the Test instructions for your README',
    },
    {
        name:'Questions',
        message:'Enter your socials for your README incase people have any Questions',
    },
]);