import generationRandomNum from '../modules/generationRandomNum.js';
import runGame from '../index.js';

const performOperation = (num1, num2, operator) => {
  let answer = '';

  switch (operator) {
    case '+':
      answer = (num1 + num2).toString();
      return answer;
    case '-':
      answer = (num1 - num2).toString();
      return answer;
    case '*':
      answer = (num1 * num2).toString();
      return answer;
    default:
      throw Error('Ой, что-то пошло не так. Повторите опрецию!');
  }
};

const generateData = () => {
  const result = ['What is the result of the expression?'];
  const num1 = generationRandomNum(0, 100);
  const num2 = generationRandomNum(0, 100);
  const operatorsArr = ['+', '-', '*'];
  const operatorNum = generationRandomNum(0, 2);
  const operator = operatorsArr[operatorNum];
  const question = `${num1} ${operator} ${num2}`;
  const answer = performOperation(num1, num2, operator);

  result.push(question);
  result.push(answer);

  return result;
};

const runCalc = () => {
  runGame(generateData);
};

export default runCalc;
