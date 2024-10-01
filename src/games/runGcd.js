import generationRandomNum from '../modules/generationRandomNum.js';
import runGame from '../index.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const generateData = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const num1 = generationRandomNum(minNumber, maxNumber);
  const num2 = generationRandomNum(minNumber, maxNumber);
  const gcd = findGCD(num1, num2);
  const question = `${num1} ${num2}`;
  const answer = gcd.toString();

  return [question, answer];
};

const runGcd = () => {
  const rule = 'Find the greatest common divisor of given numbers.';
  runGame(rule, generateData);
};

export default runGcd;
