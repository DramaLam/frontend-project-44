import generationRandomNum from '../modules/generationRandomNum.js';
import isPrime from '../modules/isPrime.js';
import runGame from '../index.js';

const generateData = () => {
  const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const minNumber = 0;
  const maxNumber = 100;
  const num = generationRandomNum(minNumber, maxNumber);
  const answer = isPrime(num) ? 'yes' : 'no';

  return [rule, num, answer];
};

const runPrime = () => {
  runGame(generateData);
};

export default runPrime;
