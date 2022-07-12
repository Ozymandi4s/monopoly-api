import {IProperty} from './interfaces';

export class Property implements IProperty {

  protected nextProperty: IProperty;

  constructor(public readonly name: string, public price: number, public rent: number, public index: number) {
  }

  public getName(): string {
    return this.name;
  }

  public getIndex(): number {
    return this.index;
  }

  public getPrice(): number {
    return this.price;
  }

  public getRent(): number {
    return this.rent;
  }

  public getNextProperty(): IProperty {
    return this.nextProperty;
  }

  public setNextProperty(nextProperty: IProperty): void {
    this.nextProperty = nextProperty;
  }

}
