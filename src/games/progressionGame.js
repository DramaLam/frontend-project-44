import generationRandomNum from '../modules/generationRandomNum.js';

const generationArr = (firstNum, stepArr, lengthArr, arr) => {
  if (arr.length === lengthArr) {
    return arr;
  }

  if (arr.length === 0) {
    arr.push(firstNum);
  }

  const nextNum = arr[arr.length - 1] + stepArr;

  arr.push(nextNum);
  generationArr(firstNum, stepArr, lengthArr, arr);

  return arr;
};

const resultArrStr = (arr) => {
  let str = '';

  for (let i = 0; i <= arr.length; i += 1) {
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
  let answer = 0;
  // const resultArr = '';

  answer = arr[positionAnswer];
  arr[positionAnswer] = '..';

  const resultArr = resultArrStr(arr);

  result.push(resultArr);
  result.push(answer);

  return result;
};

export default progressionGame;
