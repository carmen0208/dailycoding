export class CharactersCollection {
  constructor(public data: string) {}
  get length(): number {
    // console.log(this.data.length);
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    // console.log(
    //   `this.data[leftIndex] = ${this.data[leftIndex]}, this.data[rightIndex]: ${
    //     this.data[rightIndex]
    //   } and if > ${
    //     this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    //   }`
    // );
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.data.split("");
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.data = characters.join("");
  }
}
