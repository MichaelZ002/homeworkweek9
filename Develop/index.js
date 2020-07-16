const fs = require("fs");
const inquirer = require("inquirer");

// array of questions for user
const questions = [
    // this is for the title of the ReadME
    {
        type: 'input',
        name: 'title',
        message: 'what is the title?'
    },

    // to describe the product 
    {
        type: 'input',
        message: 'Please describe what the product is doing.',
        name: 'description',

    },
    // how to install this program
    {
        type: 'input',
        message: 'How do you install the program?',
        name: 'install',

    },
    // how would someone use the program? 
    {
        type: 'input',
        message: 'How would somone use the program',
        name: 'usage',

    },
    // incase of issues where to contact you
    {
        type: 'input',
        message: 'Would you like you users to be able to report issues or contribute to this project? add instructions here.',
        name: 'issues',

    },
    // what liscenes did you use or want to use 
    {
        type: 'input',
        message: 'what liscens did you use? put "none" if no lisecnes ',
        name: 'license',

    },
    //who else contributed
    {
        type: 'input',
        message: 'who else contributed to the program? if none  one write "none" ',
        name: 'contributors',

    },
    // how to test the program
    {
        type: 'input',
        message: 'how would someone test the program?" ',
        name: 'test',

    },
    // how to reach if they have questions 
    {
        type: 'input',
        message: 'how do we contact if someone has questions?" ',
        name: 'questions',

    },

];




function init() {
    inquirer.prompt(questions).then((response)=>{
    
    // make the first line for the ReadMe  using the title for the name
    fs.appendFileSync("README.md", ("# " + response.title )+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
   
    // adds the discription of the project that the users entered 
    fs.appendFileSync("README.md", ( response.description ) + '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    //this is where the installation will go
    fs.appendFileSync("README.md", ("## Installation" + '\n' + response.install )+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    // for usage 
    fs.appendFileSync("README.md", ("## How to use the Application" + '\n' + response.usage)+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    // for if there is an issue
    fs.appendFileSync("README.md", ("## Issue Reporting and Contributing" + '\n' + response.issues)+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    // for contributers 
    fs.appendFileSync("README.md", ("## Other Contibuting Developers:" + '\n' + response.contributors)+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    // creates a sub header for licences and adds what ever is typed in 
    fs.appendFileSync("README.md", ("## Licence(s)" + '\n' + response.license)+ '\n', function(err) { 
    
        if (err) { 
        console.log(err)
        }
        else {
        console.log("Success")
        }
    
    })
    
    })
    }


// function call to initialize program
init();
