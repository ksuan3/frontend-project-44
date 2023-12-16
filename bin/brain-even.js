#!/usr/bin/env node

import logicGame from '../src/game.js';
import { getUserName } from '../src/cli.js';
import { getRandomNumber } from '../src/game.js';

const RandomNumber = (num) => num % 2 === 0; 

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export const getQuestionAnswer = () => {
    const question = getRandomNumber();
    const userAnswer = RandomNumber(question)? 'yes' : 'no';
    return [question, userAnswer];
};

const startGame = () => {
    logicGame(rule,getQuestionAnswer);
};

export default startGame;

startGame();  
