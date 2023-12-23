import readlineSync from 'readline-sync';
import { rule } from '../bin/brain-even.js';
import { getRandomNumber } from '../src/formula.js';

const number = (num) => num % 2 === 0;

const logicGame = () => {

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule); 

  const roundCount = 3;  
  let correctAnswers = 0;

  while (correctAnswers < roundCount) {
    const question = getRandomNumber();
    const userAnswer = number(question)? 'yes' : 'no';
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    
    if (answer === userAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${userAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
console.log(`Congratulations, ${userName}!`);
}; 

export default logicGame;
