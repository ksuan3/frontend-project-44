import logicGame from '../index.js';
import { getRandomNumber } from '../helpers.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestion = (oper1, oper2, operation) => {

 switch (operation) {
  case '+':
  return oper1 + oper2;
  break;
  case '-':
  return oper1 - oper2;
  break; 
  case '*':
  return oper1 * oper2;
  break;
  default:
   throw new Error(`Unknown order state: '${order.state}'!`);
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


