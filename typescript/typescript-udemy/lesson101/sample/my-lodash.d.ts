declare module "lodash" {
  interface FirstFunction {
    <T>(array: ArrayLike<T>): T
  }
  interface MyLodash {
    first: FirstFunction
  }
  export const _: MyLodash;
}