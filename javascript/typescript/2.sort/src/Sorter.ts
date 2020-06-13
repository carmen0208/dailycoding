import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;
  // collection: number[];
  // constructor(collection: number[]) {
  //   this.collection = collection;
  // }
  // constructor() {}
  // sort(): void {
  //   const { length } = this.collection;
  //   for (let i = 0; i < length; i++) {
  //     for (let j = 0; j < length - i - 1; j++) {
  //       if (this.collection[j] > this.collection[j + 1]) {
  //         // if (this.collection instanceof Array) {
  //         const leftHand = this.collection[j];
  //         this.collection[j] = this.collection[j + 1];
  //         this.collection[j + 1] = leftHand;
  //         // }
  //       }
  //     }
  //   }
  // }
  sort(): void {
    // console.log(`sort with collection ${this.collection}`);
    const { length } = this;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          // console.log(`swap()`);
          this.swap(j, j + 1);
        }
      }
    }
  }
}
