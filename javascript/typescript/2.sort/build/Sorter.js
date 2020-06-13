"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter = /** @class */ (function () {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    function Sorter(collection) {
        this.collection = collection;
    }
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
    Sorter.prototype.sort = function () {
        // console.log(`sort with collection ${this.collection}`);
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    // console.log(`swap()`);
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return Sorter;
}());
exports.Sorter = Sorter;
