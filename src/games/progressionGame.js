import generationRandomNum from '../modules/generationRandomNum.js';

const generationArr = (firstNum, stepArr, lengthArr, arr) => {
  if (arr.length === lengthArr) {
    // console.log(`ARR, ${typeof(arr)}!`);
    console.log(arr);
    return arr;
  }

  if (arr.length === 0) {
    arr.push(firstNum);
  }

  const nextNum = arr[arr.length - 1] + stepArr;

  arr.push(nextNum);
  generationArr(firstNum, stepArr, lengthArr, arr);
};

const resultArr = (arr) => {
  let str = '';

  for (i = 0; i <= arr.length; i++) {
    str = `${str} ${arr[i]}`;
  }

  return arr;
};

const progressionGame = () => {
  const result = ['What number is missing in the progression?'];
  const firstNum = generationRandomNum(-100, 100);
  const lengthArr = generationRandomNum(5, 10);
  const stepArr = generationRandomNum(-100, 100);
  const arr = generationArr(firstNum, stepArr, lengthArr, []);
  console.log(`arr, ${arr}!`);
  const positionAnswer = generationRandomNum(0, lengthArr - 1);
  const answer = 0;
  const resultArr = '';

  answer = arr[positionAnswer];
  arr[positionAnswer] = '..';

  resultArr = resultArr(arr);

  result.push(resultArr);
  result.push(answer);

  return result;
};

export default progressionGame;
