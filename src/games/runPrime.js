import generationRandomNum from '../modules/generationRandomNum.js';
import isPrime from '../modules/isPrime.js';
import runGame from '../index.js';

const generateData = () => {
  const result = ['Answer "yes" if given number is prime. Otherwise answer "no".'];
  const num = generationRandomNum(0, 100);
  const answer = isPrime(num) ? 'yes' : 'no';

  result.push(num);
  result.push(answer);

  return result;
};

const runPrime = () => {
  runGame(generateData);
};

export default runPrime;
