import readlineSync from 'readline-sync';

const getName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!`);

  return userName;
};

const runGame = (game) => {
  const userName = getName();
  const numberOfGame = 2;

  for (let i = 0; i <= numberOfGame; i += 1) {
    const [rule, question, correctAnswer] = game();

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
