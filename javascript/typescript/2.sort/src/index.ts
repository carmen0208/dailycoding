import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
const numberCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numberCollection);
numberCollection.sort();
console.log(numberCollection.data);

const charactorCollection = new CharactersCollection("XabskqSP");
// const charSorter = new Sorter(charactorCollection);
charactorCollection.sort();
console.log(charactorCollection.data);

const linkedList = new LinkedList();
linkedList.add(499);
linkedList.add(-10);
linkedList.add(-5);
linkedList.add(40);

// const linkedSorter = new Sorter(linkedList);
linkedList.sort();
linkedList.print();
