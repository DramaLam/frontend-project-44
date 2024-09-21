#!/usr/bin/env node

import readlineSync from 'readline-sync';

const randomNum = () => {
  const min = 0;
  const max = 100;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

const userName = readlineSync.question('May I have your name? ');
let count = 0;

console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

while (count < 3) {
  const num = randomNum();
  console.log(`Question: ${num}`);

  const answerUser = readlineSync.question('Your answer: ');

  if ((answerUser === 'yes' && num % 2 === 0) || (answerUser === 'no' && num % 2 !== 0)) {
    console.log('Correct!');
  } else {
    if (num % 2 === 0) {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was 'yes'.`);
    } else {
      console.log(`'${answerUser}' is wrong answer ;(. Correct answer was 'no'.`);
    }
    console.log(`Let's try again, ${userName}!`);

    count = 4;
  }

  count += 1;
}

if (count === 3) {
  console.log(`Congratulations, ${userName}!`);
}
