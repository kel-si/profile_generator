const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your nickname? ', (answerNickname) => {
  console.log(`You answered: ${answerNickname}`);

  rl.question('What is your favorite hobby? ', (answerHobby) => {
    console.log(`You answered: ${answerHobby}`);

    rl.question('What is your favorite music? ', (answerMusic) => {
      console.log(`You answered: ${answerMusic}`);

      rl.question('What is your favorite food? ', (answerFood) => {
        console.log(`You answered: ${answerFood}`);

        rl.question('What is your favorite place to visit? ', (answerVisit) => {
          console.log(`You answered: ${answerVisit}`);

          rl.question('What is your favorite sport? ', (answerSport) => {
            console.log(`You answered: ${answerSport}`);

            rl.question('What is your superpower? ', (answerPower) => {
              console.log(`You answered: ${answerPower}`);
            
              console.log(`Hi! I am ${answerNickname}. My favorite hobby is ${answerHobby} and I like to listen to ${answerMusic}. The b best food is ${answerFood} and you I'd love to visit ${answerVisit}. My favorite sport is ${answerSport}. My superpower is ${answerPower}!`)

            rl.close();
            
            });
          });
        });
      });
    }); 
  });
});
