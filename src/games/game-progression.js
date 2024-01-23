import playGame from '../index.js';
import getRandomNumber from '../helpers.js';

const rule = 'What number is missing in the progression?';

const lengthProgression = 10;

const getQuestionAnswer = () => {
  const startNum = getRandomNumber(0, 100);
  const diffProgression = getRandomNumber(1, 100);
  const hiddenElement = getRandomNumber(0, lengthProgression);
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(startNum + diffProgression * i);
  }
  const answer = progression[hiddenElement];
  progression[hiddenElement] = '..';
  const question = progression.join(' ');
  return [question, String(answer)];
};

const startGameProgression = () => {
  playGame(rule, getQuestionAnswer);
};

export default startGameProgression;
