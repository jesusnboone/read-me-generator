// function to generate markdown for README
module.exports = templateData => {
  const {title, description, table, installation, usage, licenses, contribution, tests, email, username} = templateData;
  return `
  # ${title}

  ## Description

  ${description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation

  ${installation}

  ## Usage

  ${usage}

  ## License

  ${licenses}

  ## Contributing
  
  ${contribution}

  ## Tests

  ${tests}

  ## Questions

  Contact: ${email}
  Github Username: https://github.com/${username}
`;

}