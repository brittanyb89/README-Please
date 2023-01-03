// Packages needed for this application
import fs from "fs";
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
// const inquirer = require("inquirer");
// const fs = require("fs");
// const generateMarkdown = require("./utils/generateMarkdown");

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate(titleInput) {
      if (titleInput) {
        return true;
      }

      console.log("Please enter a title for your project!");
      return false;
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
    validate(descriptionInput) {
      if (descriptionInput) {
        return true;
      }

      console.log("Please enter a description for your project!");
      return false;
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
    validate(installationInput) {
      if (installationInput) {
        return true;
      }

      console.log("Please enter installation instructions for your project!");
      return false;
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
    validate(usageInput) {
      if (usageInput) {
        return true;
      }

      console.log("Please enter usage information for your project!");
      return false;
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project.",
    validate(contributingInput) {
      if (contributingInput) {
        return true;
      }

      console.log("Please enter contribution guidelines for your project!");
      return false;
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project.",
    validate(testsInput) {
      if (testsInput) {
        return true;
      }

      console.log("Please enter test instructions for your project!");
      return false;
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.",
    validate(githubInput) {
      if (githubInput) {
        return true;
      }

      console.log("Please enter your GitHub username!");
      return false;
    },
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
    validate(emailInput) {
      if (emailInput) {
        return true;
      }

      console.log("Please enter your email address!");
      return false;
    },
  },
];

// Function to write README file
function writeToFile(README, data) {
  fs.writeFile("README.md", data, (err) => {
    if (err) throw err;
    console.log("README file created! Check out README.md to see it!");
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
