import generationRandomNum from '../modules/generationRandomNum.js';
import isEven from '../modules/isEven.js';
import runGame from '../index.js';

const generateData = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const num = generationRandomNum(minNumber, maxNumber);
  const answer = isEven(num) ? 'yes' : 'no';

  return [num, answer];
};

const runEven = () => {
  const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(rule, generateData);
};

export default runEven;
