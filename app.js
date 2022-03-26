const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

// Block 1
// const printProfileData = (profileDataArr) => {
//     console.log(profileDataArr);
// };

// Block 2; Block 2 is same as Block 1 but loops through the array 
// Notice the lack of parentheses around the `profileDataArr` parameter?
// When only one parameter is provided, no need to use paranthesis in arrow function
// const printProfileData = profileDataArr => {
//     for (let i = 0; i < profileDataArr.length; i++) {
//       console.log(profileDataArr[i]);
//     }
// };

// Block 3; same as Block 2 but uses new .forEach() method
// const printProfileData = profileDataArr => {
//     profileDataArr.forEach((profileItem) => {
//         console.log(profileItem)
//     });
// };

// Block 4; same as Block 3. .forEach() method is new (applies only array) and makes code cleaner
// if the function doing one action, then it can be written in one line with arrow function 
const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};


printProfileData(profileDataArgs);