import generationRandomNum from '../modules/generationRandomNum.js';
import runGame from '../index.js';

const performOperation = (num1, num2, operator) => {
  let answer = '';

  switch (operator) {
    case '+':
      answer = (num1 + num2);
      return answer;
    case '-':
      answer = (num1 - num2);
      return answer;
    case '*':
      answer = (num1 * num2);
      return answer;
    default:
      console.log(num1, num2, operator);
      throw Error('Ой, что-то пошло не так. Повторите опрецию!');
  }
};

const generateData = () => {
  const minNumber = 0;
  const maxNumber = 100;
  const num1 = generationRandomNum(minNumber, maxNumber);
  const num2 = generationRandomNum(minNumber, maxNumber);
  const operatorsArr = ['+', '-', '*'];
  const minNumberOperator = 0;
  const maxNumberOperator = operatorsArr.length - 1;
  const operatorNum = generationRandomNum(minNumberOperator, maxNumberOperator);
  const operator = operatorsArr[operatorNum];
  const question = `${num1} ${operator} ${num2}`;
  const answer = performOperation(num1, num2, operator).toString();

  return [question, answer];
};

const runCalc = () => {
  const rule = 'What is the result of the expression?';
  runGame(rule, generateData);
};

export default runCalc;
