import generationRandomNum from '../modules/generationRandomNum.js';

const evenGame = () => {
  const result = ['Answer "yes" if the number is even, otherwise answer "no".'];
  const num = generationRandomNum(0, 100);

  result.push(num);

  if (num % 2 === 0) {
    result.push('yes');
  } else {
    result.push('no');
  }

  return result;
};

export default evenGame;
