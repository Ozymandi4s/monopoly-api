import {IMonopolyGame} from './../models/interfaces';
import {MonopolyGame} from './../models/MonopolyGame';

export const game: IMonopolyGame = new MonopolyGame();
game.playGame();