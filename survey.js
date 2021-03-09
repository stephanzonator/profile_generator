const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What\'s your name? ', (answer1) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What kind of music do you like? ', (answer3) => {
      rl.question('Favorite meal of the day? ', (answer4) => {
        rl.question('Favorite food? ', (answer5) => {
          rl.question('Favorite sport? ', (answer6) => {
            rl.question('What\s your superpower? ', (answer7) => {
              var result = `Hi! My name is ${answer1}. I like ${answer2} and ${answer3}. I like having 
              ${answer5} for ${answer4} while I watch ${answer6}. My superpower is ${answer7}`;
              console.log(`${result}`);
              rl.close();
      
            });        
          });        
        });        
      });        
    });        
  });
});

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });
// rl.question('Question #2? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Answer #2: ${answer}`);

//   rl.close();
// });

rl.question('Please enter the second number : ', (answer3) => {
  var result = (+answer1) + (+answer2);
  console.log(`The sum of above two numbers is ${result}`);
  rl.close();
});