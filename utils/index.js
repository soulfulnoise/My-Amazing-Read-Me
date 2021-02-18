// Packages used for application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Write File Async
const writeFileAsync = util.promisify(fs.writeFile);


