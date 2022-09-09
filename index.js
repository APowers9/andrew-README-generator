const fs = require('fs')
const inquirer = require('inquirer');

const prompt = inquirer.createPromptModule();
//sections of README: title, description, table of contents, installation, usage, license, contributing, tests, and questions

prompt ([
    {
        name:'title',
        message:'Enter the Title for your README',
    },
    {
        name:'description',
        message:'Enter the Description for your README',
    },
    {
        name:'tableofcontents',
        message:'Enter the Table of Contents for your README',
    },
    {
        name:'installation',
        message:'Enter the Installation instructions for your README',
    },
    {
        name:'usage',
        message:'Enter the Usage information for your README',
    },
    {
        name:'license',
        message:'Enter the License for your README',
    },
    {
        name:'contributing',
        message:'Enter the Contribution guidelines for your README',
    },
    {
        name:'tests',
        message:'Enter the Test instructions for your README',
    },
    {
        name:'questions',
        message:'Enter your socials for your README incase people have any Questions',
    },
]).then((data) => {
    console.log(data);
    const userReadme = `
    # Title ${data.title}

    ## Description ${data.description}
    
    ## Table of Contents ${data.tableofcontents}
    
    ## Installation ${data.installation}
    
    ## Usage ${data.usage}
    
    ## License ${data.license}
    
    ## Contributing ${data.contributing}
    
    ## Tests ${data.tests}
    
    ## Questions ${data.questions}
    `
    console.log(userReadme);
    fs.writeFileSync('output/README.md', userReadme)
})