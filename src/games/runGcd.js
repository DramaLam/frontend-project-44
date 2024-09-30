import generationRandomNum from '../modules/generationRandomNum.js';
import runGame from '../index.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const generateData = () => {
  const result = ['Find the greatest common divisor of given numbers.'];
  const minNumber = 0;
  const maxNumber = 100;
  const num1 = generationRandomNum(minNumber, maxNumber);
  const num2 = generationRandomNum(minNumber, maxNumber);
  const gcd = findGCD(num1, num2);

  result.push(`${num1} ${num2}`);
  result.push(gcd.toString());

  return result;
};

const runGcd = () => {
  runGame(generateData);
};

export default runGcd;
