#!/usr/bin/env node

import game from '../src/games/game-even.js';
import { getUserName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);

const gameRules = start();
gameRules.brainGames;
gameRules.check(brainGames);
game(gameRules).reset(); 
  
