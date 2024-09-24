import generationRandomNum from '../modules/generationRandomNum.js';

const findGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGCD(b, a % b);
};

const gcdGame = () => {
  const result = ['Find the greatest common divisor of given numbers.'];
  const num1 = generationRandomNum(0, 100);
  const num2 = generationRandomNum(0, 100);
  const gcd = findGCD(num1, num2);

  result.push(`${num1} ${num2}`);
  result.push(gcd.toString());

  return result;
};

export default gcdGame;
