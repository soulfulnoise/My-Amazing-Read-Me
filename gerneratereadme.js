//function for generating readme
function generateReadme(answers) {
  return `
  #header:\n${answers.nameofproject}

  ## Description:\n
  ${answers.projectdescription}

  ### Table of Contents:\n
  *Description
   *(#projectdescription)   
 *Usage
    *#repoinfo
  *License
    *#licensing
  *Contribution
    *participation
  *Test
    *Testing
  *userinfo
    *useremail,githubinfo

  ## Installation:\n
  ${answers.dependencies}\n

  ## Usage:\n
  ${answers.repoinfo}\n

  ## Dependecies:\n
  ${answerd.dependencies}\n

  ## Participation:\n
   ${answers.participation}\n

  ## Testing:\n
  ${answers.Testing}\n

  ## Contact Me:\
  Check out mu Github at:[GitHub](https://github.com/${answers.githubinfo})
  
  * You can hit me up via Email at:${answers.useremail}
  `;
};

module.exports = generateReadme;

 
