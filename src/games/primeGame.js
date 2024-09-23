import generationRandomNum from '../modules/generationRandomNum.js';

const isPrime = (num) => {
  if (num <= 1) {
    return 'no';
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

const evenGame = () => {
  const result = ['Answer "yes" if given number is prime. Otherwise answer "no".'];
  const num = generationRandomNum(0, 100);
  const answer = isPrime(num);

  result.push(num);
  result.push(answer);

  return result;
};

export default evenGame;
