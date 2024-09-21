import readlineSync from 'readline-sync';
import welcome from './cli.js';

const games = (game) => {
  const userName = welcome();
  let count = 0;

  while (count < 3) {
    const gameInfo = game();
    const rule = gameInfo[0];
    const question = gameInfo[1];
    const correctAnswer = gameInfo[2];

    if (count === 0) {
      console.log(rule);
    }

    console.log(`Question: ${question}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser.toString() === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      count = 4;
    }

    count += 1;
  }

  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default games;
