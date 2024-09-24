import generationRandomNum from '../modules/generationRandomNum.js';
import runGame from '../index.js';

const generateData = () => {
  const result = ['What is the result of the expression?'];
  const num1 = generationRandomNum(0, 100);
  const num2 = generationRandomNum(0, 100);
  const operatorsArr = ['+', '-', '*'];
  const operatorNum = generationRandomNum(0, 2);
  const operator = operatorsArr[operatorNum];
  const question = `${num1} ${operator} ${num2}`;
  let answer = '';

  result.push(question);

  switch (operator) {
    case '+':
      answer = (num1 + num2).toString();
      result.push(answer);
      return result;
    case '-':
      answer = (num1 - num2).toString();
      result.push(answer);
      return result;
    case '*':
      answer = (num1 * num2).toString();
      result.push(answer);
      return result;
    default:
      throw Error('Ой, что-то пошло не так. Повторите опрецию!');
  }
};

const runCalc = () => {
  runGame(generateData);
};

export default runCalc;
