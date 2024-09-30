import generationRandomNum from '../modules/generationRandomNum.js';
import isEven from '../modules/isEven.js';
import runGame from '../index.js';

const generateData = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  const minNumber = 0;
  const maxNumber = 100;
  const num = generationRandomNum(minNumber, maxNumber);
  const answer = isEven(num) ? 'yes' : 'no';

  return [rule, num, answer];
};

const runEven = () => {
  runGame(generateData);
};

export default runEven;
