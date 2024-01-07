import readlineSync from 'readline-sync';

const roundCount = 3;

const logicGame = (rule, getQuestionAnswer) => {

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rule);

  let correctAnswers = 0;

  while (correctAnswers < roundCount) {
    const [question, answerCor] = getQuestionAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answerCor === userAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`"${answerCor}" is wrong answer ;(. Correct answer was "${userAnswer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
console.log(`Congratulations, ${userName}!`);
};
export default logicGame;
