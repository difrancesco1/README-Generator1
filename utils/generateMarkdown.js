
// returns a license badge
function renderLicenseBadge(license, github, titleInput) {
    if(license === 'None') {
      return ``;
    }
    else {
      return `<img src="https://img.shields.io/github/license/${github}/${titleInput}">`
    }
  }

  // Returns License LINK
  function renderLicenseLink(license) {
    if(license === 'None') {
      return ``;
    }
    else {
      return `* [License](#license)`
    }
  }
  
  // Returns the license section of the README  app
  function renderLicenseSection(license) {
    if(license === 'None') {
      return ``;
    }
    else {
      return `# License 
      ${license}`;
    }
  }
  
  //Markdown text for README app
  
  function generateMarkdown(data) {
    return `
    ${renderLicenseBadge(data.license, data.github, data.title)}
  
    
    # ${data.title}
    
    # Description  
    ${data.description}
  
    # Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseLink(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
    # Installation
    These programs need to be installed for the application to run: 
    ${data.installation}
  
    # Usage
    The primary use of this application: 
    ${data.usage}
    
    ${renderLicenseSection(data.license)}
    
  
    # Contributions  
    ${data.contributing}
  
    # Tests
    To run tests, use these commands: 
    ${data.tests}
  
    # Questions
    Any questions you have regarding the application, please contact ${data.github} at this email ${data.email}.
  
  `;
  }
  
  module.exports = generateMarkdown;
  