import readlineSync from 'readline-sync';
import welcome from './cli.js';

const runGame = (game) => {
  const userName = welcome();

  for (let i = 0; i <= 2; i += 1) {
    const gameInfo = game();
    const [rule, question, correctAnswer] = gameInfo;

    if (i === 0) {
      console.log(rule);
    }

    console.log(`Question: ${question}`);

    const answerUser = readlineSync.question('Your answer: ');

    if (answerUser === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      break;
    }

    if (i === 2) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default runGame;