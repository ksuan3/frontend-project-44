import readlineSync from 'readline-sync';
import cli from '../cli.js';

const getRandomNumber = (num) => Math.round(Math.random() * num);

export default () => {

const answer = {
  answerOne: 'yes',
  answerTwo: 'no',
}
};

export default (rules) => {
  const failMaxAnswer = 0;
  const correctMinAnswer = 3;
  let correctCount = 0;
  let failCount = 0;

const reset () => {
  let correctCount = 0;
  let failCount = 0;
}

const finishLoose () => {
  console.log(`Let's try again, ${userName}!`);
  reset();
}

const finishWin () => {
  console.log(`Congratulations, ${userName}!`);
    reset();
} 

const brainGames = () => {
  const num = getRandomNumber(99);
  const rightAnswer = num % 2 === 0 ? answer.answerOne : answer.answerTwo;
  console.log(`Question: ${num}`);
  const Answer = readlineSync.question('Your answer:');
 };
export const check = (rightAnswer, Answer) => {
  if (Answer === rightAnswer.toString()) {
      console.log('Correct!');
      correctCount += 1;
    } else {
      console.log(`'${Answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      failCount += 1;
}
};

export const start () => {
console.log('Answer "yes" if the number is even, otherwise answer "no".')
braingames();
};
 
