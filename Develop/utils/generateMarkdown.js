// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }

  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }

  if (license === "GPL") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }

  if (license === "BSD") {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  // If there is no license, return an empty string

  return "";
}

// Function that returns the license link
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  }

  if (license === "Apache") {
    return `[Apache License](https://opensource.org/licenses/Apache-2.0)`;
  }

  if (license === "GPL") {
    return `[GPL License](https://www.gnu.org/licenses/gpl-3.0)`;
  }

  if (license === "BSD") {
    return `[BSD License](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  // If there is no license, return an empty string

  return "";
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license === "MIT") {
    return `This project is licensed under the terms of the MIT license.`;
  }

  if (license === "Apache") {
    return `This project is licensed under the terms of the Apache license.`;
  }

  if (license === "GPL") {
    return `This project is licensed under the terms of the GPL license.`;
  }

  if (license === "BSD") {
    return `This project is licensed under the terms of the BSD license.`;
  }
  // If there is no license, return an empty string

  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

##Description:
  ${data.description}

  # Table of Content
-[Description](#Description)
-[Installation](#Installation)
-[Usage](#Usage)
-[Licenses](#Licenses)
-[Contributing](#Contribution)
-[Tests](#Tests)
-[Questions](#Questions)

##Installation:
  ${data.Installation}

##Usage:
  ${data.usage}

##Licenses:
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

##Contribution:
  ${data.contribution}

##Tests:
  ${data.test}

##Questions:
  ${data.email}
  ${data.username}
`;
}

module.exports = generateMarkdown;
