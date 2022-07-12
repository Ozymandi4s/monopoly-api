import * as R from 'ramda';
import {Board} from './Board';
import {Dice} from './Dice';
import {IBoard, IDice, IMonopolyGame, IPlayer} from './interfaces';
import {Player} from './Player';

export class MonopolyGame implements IMonopolyGame {

  public board: IBoard;
  public dice: IDice[];
  public players: IPlayer[];
  private readonly roundsTotal: number = 1000;

  constructor() {

    const dice: IDice = new Dice();
    this.dice = [dice];

    this.board = new Board();
    this.board.init();

    const player1: IPlayer = new Player('Impulsivo', 1, 300, this.dice, this.board);
    const player2: IPlayer = new Player('Exigente ', 2, 300, this.dice, this.board);
    const player3: IPlayer = new Player('Cauteloso', 3, 300, this.dice, this.board);
    const player4: IPlayer = new Player('Aleatório', 4, 300, this.dice, this.board);

    this.players = [player1, player2, player3, player4];

  }

  public playGame(): void {
    R.times(() => this.playRound(), this.roundsTotal);
    const player1: IPlayer = this.players[0];
    const player2: IPlayer = this.players[1];
    const player3: IPlayer = this.players[2];
    const player4: IPlayer = this.players[3];
  };

  public getPlayers(): IPlayer[] {
    return this.players;
  };

  private playRound(): void {
    this.players.forEach((player: IPlayer) => {
      player.takeTurn();
    });
  }

}
