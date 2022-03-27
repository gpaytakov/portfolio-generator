// importing fs=fileSystem module
const fs = require('fs');
const generatePage = require('./src/page-template.js');

// const profileDataArgs = process.argv.slice(2, process.argv.lenght);

// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);

// // template literals
// const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;

const profileDataArgs = process.argv.slice(2);
// // long variable assignment method
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];

// short variable assignment method
const [name1, github] = profileDataArgs;

// // this is a test, if it is working 
// const generatePage = (userName, githubName) => {
//   return `
//     Name: ${userName}
//     GitHub: ${githubName}
//   `;
// };

fs.writeFile('./index.html', generatePage(name1, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});