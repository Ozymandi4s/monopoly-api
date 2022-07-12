interface IMonopolyGame {
  playGame: () => void;
  getPlayers: () => IPlayer[];
}

interface IDice {
  roll(): void;
  getFaceValue(): number;
}

interface IBoard {
  init(): void;
  getProperty(start: IProperty, distance: number): IProperty;
  getStartProperty(): IProperty;
}

interface IProperty {
  name: string;
  index: number;
  getName: () => string;
  getIndex: () => number;
  getPrice: () => number;
  getRent: () => number;
  getNextProperty: () => IProperty;
  setNextProperty: (nextProperty: IProperty) => void;
}

interface IPlayer {
  name: string;
  board: IBoard;
  dice: IDice[];
  takeTurn: () => void;
  getName: () => string;
  getLocation: () => IProperty;
}

export {IMonopolyGame, IDice, IBoard, IProperty, IPlayer};
