//SAME:both Type and Interface can merge other Types or Interfaces, but Interface would be more complicated

interface IPet2 {
  pose(): void;
}
interface IFeline {
  nightvision: boolean;
}

//Type way of merge
type Cat = IPet2 & IFeline;

// cat would have boht nightvision and pose options
// constcat:Cat
// cat.

// Interface way of merge
interface ICat extends IPet2, IFeline {

}


// cat would have boht nightvision and pose options
// const cat2 : ICat
// cat2.
