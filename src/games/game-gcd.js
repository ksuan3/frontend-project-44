import logicGame from '../index.js';
import getRandomNumber from '../helpers.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gameGCD = (num1, num2) => {
  const minNum = num1 > num2 ? num2 : num1;
  let gcd = 1;
  for (let i = 2; i <= minNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  }
  return gcd;
};

const getGame = () => {
  const num1 = getRandomNumber();
  const num2 = getRandomNumber();
  const question = `${num1} ${num2}`;
  const answer = gameGCD(num1, num2);
  return [question, String(answer)];
};

const startGameGCD = () => {
  logicGame(rule, getGame);
};

export default startGameGCD;
