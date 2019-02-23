// DIFFERENT: Interface can do declarationMerging but Type cannot

interface Foo {
  a: string;
}

interface Foo {
  b: string;
}

// foo would have a, b
// let foo: Foo;
// foo.

type FooType = {
  a: string;
}

// duplicated error:
// type FooType = {
//   b: string;
// }