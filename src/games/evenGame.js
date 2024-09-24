import generationRandomNum from '../modules/generationRandomNum.js';

const isEven = (num) => {return num % 2 === 0;};

const evenGame = () => {
  const result = ['Answer "yes" if the number is even, otherwise answer "no".'];
  const num = generationRandomNum(0, 100);

  result.push(num);

  isEven(num) ? result.push('yes') : result.push('no');

  return result;
};

export default evenGame;
