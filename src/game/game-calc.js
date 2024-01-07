import logicGame from '../index.js';
import { getRandomNumber } from '../src/formula.js';

const rule = 'What is the result of the expression?';
const operations = ['+', '-', '*'];

const getQuestion = (oper1, oper2, operation) => {
let answer;
 switch (operation) {
  case '+':
  answer = oper1 + oper2;
  break;
  case '-':
  answer = oper1 - oper2;
  break; 
  case '*':
  answer = oper1 * oper2;
  break;
  default: break;
 }
return answer;
};

const getQestionAnswer = () => {
const oper1 = getRandomNumber();
const oper2 = getRandomNumber();
const operation =  
}


