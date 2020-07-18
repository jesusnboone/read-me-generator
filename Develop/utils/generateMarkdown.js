// function to generate markdown for README
module.exports = templateData => {
  const {title, description, table, installation, usage, licenses, contribution, tests, email, username} = templateData;
  return `
  ${title}
  ${description}
  ${table}
  ${installation}
  ${usage}
  ${licenses}
  ${contribution}
  ${tests}
  ${email}
  ${username}
`;

}