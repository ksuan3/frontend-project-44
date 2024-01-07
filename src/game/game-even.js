import logicGame from '../index.js';
import { getRandomNumber } from '../formula.js';

const number = (num) => num % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAnswer = () => {
  const question = getRandomNumber();
  const answerCor = number(question) ? 'yes' : 'no';
  return [question, answerCor];
};

const startGame = () => {
    logicGame(rule,getQuestionAnswer);
};
export default startGame;

