import generationRandomNum from '../modules/generationRandomNum.js';
import runGame from '../index.js';

const generationArr = (firstNum, stepArr, lengthArr, arr) => {
  const newArr = arr;

  if (newArr.length === lengthArr) {
    return newArr;
  }

  if (newArr.length === 0) {
    newArr.push(firstNum);
  }

  const nextNum = newArr[newArr.length - 1] + stepArr;

  newArr.push(nextNum);
  generationArr(firstNum, stepArr, lengthArr, newArr);

  return newArr;
};

const generateData = () => {
  const minNumber = -100;
  const maxNumber = 100;
  const firstNum = generationRandomNum(minNumber, maxNumber);
  const minLength = 5;
  const maxLength = 10;
  const lengthArr = generationRandomNum(minLength, maxLength);
  const stepArr = generationRandomNum(minNumber, maxNumber);
  const arr = generationArr(firstNum, stepArr, lengthArr, []);
  const minPosition = 0;
  const positionAnswer = generationRandomNum(minPosition, lengthArr - 1);
  const answer = arr[positionAnswer];

  arr[positionAnswer] = '..';

  const question = (arr.join(' '));

  return [question, answer];
};

const runProgression = () => {
  const rule = 'What number is missing in the progression?';
  runGame(rule, generateData);
};

export default runProgression;
