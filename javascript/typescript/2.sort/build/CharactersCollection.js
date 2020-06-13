"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CharactersCollection = /** @class */ (function () {
    function CharactersCollection(data) {
        this.data = data;
    }
    Object.defineProperty(CharactersCollection.prototype, "length", {
        get: function () {
            // console.log(this.data.length);
            return this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    CharactersCollection.prototype.compare = function (leftIndex, rightIndex) {
        // console.log(
        //   `this.data[leftIndex] = ${this.data[leftIndex]}, this.data[rightIndex]: ${
        //     this.data[rightIndex]
        //   } and if > ${
        //     this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
        //   }`
        // );
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    };
    CharactersCollection.prototype.swap = function (leftIndex, rightIndex) {
        var characters = this.data.split("");
        var leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.data = characters.join("");
    };
    return CharactersCollection;
}());
exports.CharactersCollection = CharactersCollection;
