import {IBoard, IDice, IPlayer, IProperty} from './interfaces';

export class Player implements IPlayer {

  private previousPos: number = 0
  private currentPos: number = 0

  constructor(public readonly name: string, public type: number, public balance: number, public dice: IDice[], public board: IBoard) {
  }

  public takeTurn(): void {
	let rollTotal: number = 0;
	this.dice.forEach((dice: IDice) => {
	  dice.roll();
	  rollTotal = dice.getFaceValue()
	});

	this.previousPos = 0 
	this.currentPos = 0 

	if (this.currentPos < this.previousPos) {
	   this.balance += 100
	}

	if (this.type == 1) {
		this.buy()
	}

	if (this.type == 2) {

	}

	if (this.type == 3) {

	}

	if (this.type == 4) {

	}
  }

  public getLocation(): IProperty {
	return 
  }

  public getName(): string {
	return this.name;
  }

  public buy() {
	
  }

  public playerAreBroken() {
	  return this.balance <= 0 ? true : false 
  }


}
