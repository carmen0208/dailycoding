// SAME: both interface and type can be extends


// interface extends interface
interface IName {
  name: string;
}
interface IUser extends IName {
  age: number;
}
// type extends type
type NameType = {
  name: string;
}
type UserType = NameType & { age: number}
//Interface Extend Type
interface IUser2 extends NameType {
  age: number
}
// Type extend Interface
type UserType2 = IName & { age: number}

export {};