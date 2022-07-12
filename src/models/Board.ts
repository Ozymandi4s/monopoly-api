import {IBoard, IProperty} from './interfaces';
import {Property} from './Property';

export class Board implements IBoard {

  private properties: IProperty[];

  public init(): void {
    this.properties = [];
    this.buildProperties();
    this.linkProperties();
  }

  public getProperty(start: IProperty, distance: number): IProperty {
    const endIndex: number = (start.getIndex() + distance) % 20;
    return this.properties[endIndex];
  }

  public getStartProperty(): IProperty {
    return this.properties[0];
  }

  protected buildProperties(): void {
    for (let i: number = 0; i < 20; i++) {
      this.build(i);
    }
  }

  protected linkProperties(): void {
    for (let i: number = 0; i < this.properties.length - 1; i++) {
      this.link(i);
    }
    const first: IProperty = this.properties[0];
    const last: IProperty = this.properties[this.properties.length - 1];
    last.setNextProperty(first);
  }

  private build(i: number): void {
    const price = Math.floor(Math.random() * 100) + i;
    const rent = Math.floor(Math.random() * 40) + i;
    const square: IProperty = new Property(`Square ${i + 1}`, price, rent, i);
    this.properties[i] = square;
  }

  private link(i: number): void {
    const current: IProperty = this.properties[i];
    const next: IProperty = this.properties[i + 1];
    current.setNextProperty(next);
  }

}
