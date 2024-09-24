import generationRandomNum from '../modules/generationRandomNum.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const evenGame = () => {
  const result = ['Answer "yes" if given number is prime. Otherwise answer "no".'];
  const num = generationRandomNum(0, 100);

  result.push(num);

  isPrime(num) ? result.push('yes') : result.push('no');

  return result;
};

export default evenGame;
