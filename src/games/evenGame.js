import generationRandomNum from '../modules/generationRandomNum.js';
import isEven from '../modules/isEven.js';

const evenGame = () => {
  const result = ['Answer "yes" if the number is even, otherwise answer "no".'];
  const num = generationRandomNum(0, 100);
  const answer = isEven(num) ? 'yes' : 'no';

  result.push(num);
  result.push(answer);

  return result;
};

export default evenGame;
