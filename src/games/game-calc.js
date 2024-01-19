import logicGame from '../index.js';
import getRandomNumber from '../helpers.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestion = (oper1, oper2, operation) => {
  switch (operation) {
    case '+':
      return oper1 + oper2;
    case '-':
      return oper1 - oper2;
    case '*':
      return oper1 * oper2;
    default:
      throw new Error('No such action');
  }
};

const getGame = () => {
  const oper1 = getRandomNumber();
  const oper2 = getRandomNumber();
  const operation = operations[getRandomNumber(0, operations.length)];
  const question = `${oper1} ${operation} ${oper2}`;
  const answer = getQuestion(oper1, oper2, operation);
  return [question, String(answer)];
};

const startGameCalc = () => {
  logicGame(rule, getGame);
};

export default startGameCalc;
