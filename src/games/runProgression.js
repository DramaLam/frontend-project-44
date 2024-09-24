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
  const result = ['What number is missing in the progression?'];
  const firstNum = generationRandomNum(-100, 100);
  const lengthArr = generationRandomNum(5, 10);
  const stepArr = generationRandomNum(-100, 100);
  const arr = generationArr(firstNum, stepArr, lengthArr, []);
  const positionAnswer = generationRandomNum(0, lengthArr - 1);
  const answer = arr[positionAnswer];

  arr[positionAnswer] = '..';

  result.push(arr.join(' '));
  result.push(answer.toString());

  return result;
};

const runProgression = () => {
  runGame(generateData);
};

export default runProgression;
