declare interface FirstFunction {
  <T>(array: ArrayLike<T>): T
}
declare interface MyLodash {
  first: FirstFunction
}