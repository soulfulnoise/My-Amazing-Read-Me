// Packages used for application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//const generateReadme = require("My-Amazing-Read-Me\README.md");
const path = require("path");


// Write File Async
const writeFileAsync = util.promisify(fs.writeFile);

// Created an array of questions for user input and generate in Readme.md
function promptUser() {
    console.log("dont give up!!")
    return inquirer.prompt([
        {
            type:"input",
            name:"githubinfo",
            message:"What is your Github Username?"   
        },
        { 
            type:"input",
            name:"useremail",
            message:"What is you Email?"   
        },
        {
            type:"input",
            name:"nameofproject",
            message:"What is your projects name?"   
        },
        {
            type:"input",
            name:"projectdescription",
            message:"Please write a short description of your project:"   
        },
        {
            type:"input",
            name:"licensing",
            message:"what kind of license should your project have?"   
        }, {
            type:"input",
            name:"dependecies",
            message:"What command should run to install dependencies?"   
        },
        {
            type:"input",
            name:"Testing",
            message:"What command should be run to test?"   
        },
        {
            type:"input",
            name:"repoinfo",
            message:"What dose the user need to know using your repo?"   
        },
        {
            type:"input",
            name:"participation",
            message:"What dose the user need to know about contributing to the repo?"   
        },
    ]);    
}
// Async function using util.promisify to resolve Promise
//using try to test block as it runs..
async function init(){
    console.log("you got this Lee!!")
    try{
        const answers = await promptUser();
        const readme = generateReadme(answers);
//Create a new ReadMe.md 
        await writeFileAsync("My-Amazing-Read-Me\README.md", generateReadme);
        console.log("I told you Bruh!!");
    } catch(err){
      return console.log(err);
    }

}
init();