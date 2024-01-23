import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getQuestionAnswer = () => {
  const question = getRandomNumber();
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

const startGamePrime = () => {
  playGame(rule, getQuestionAnswer);
};

export default startGamePrime;
