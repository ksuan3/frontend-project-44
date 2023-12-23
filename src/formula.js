const maxNumRand = 100;
const minNumRand = 0;

export const getRandomNumber = (minNum = minNumRand,
  maxNum = maxNumRand) => Math.floor(Math.random() * maxNum) + minNum;
