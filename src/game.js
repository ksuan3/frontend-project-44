import readlineSync from 'readline-sync';
import cli from '../cli.js';
import { rule } from '../brain-even.js';

const getRandomNumber = (num) => Math.round(Math.random() * num);

export default logicGame = (rule, getQuestionAnswer) => {

  console.log('Welcome to the Brain Games!');
  console.log(cli());
  console.log(rule); 

  const roundCount = 3;  
  let correctAnswers = 0;

  while (correctAnswers < roundCount) {
    const [question, userAnswer] = getQuestionAndAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    
    if (userAnswer === answer) {
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
