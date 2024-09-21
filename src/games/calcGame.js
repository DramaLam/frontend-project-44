import generationRandomNum from '../modules/generationRandomNum.js';

const calcGame = () => {
  const result = ['What is the result of the expression?'];
  const num1 = generationRandomNum(0, 100);
  const num2 = generationRandomNum(0, 100);
  const operatorsArr = ['+', '-', '*'];
  const operatorNum = generationRandomNum(0, 2);
  const operator = operatorsArr[operatorNum];

  switch (operator) {
    case '+':
      result.push(`${num1} + ${num2}`);
      result.push(num1 + num2);
      return result;
    case '-':
      result.push(`${num1} - ${num2}`);
      result.push(num1 - num2);
      return result;
    case '*':
      result.push(`${num1} * ${num2}`);
      result.push(num1 * num2);
      return result;
    default:
      throw Error('Блять');
  }
};

export default calcGame;
