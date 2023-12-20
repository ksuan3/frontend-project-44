#!/usr/bin/env node

import logicGame from '../src/game.js';
import getQuestionAnswer from '../src/game.js';
 

export const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
    logicGame(rule,getQuestionAnswer);
};

export default startGame;

startGame();  
