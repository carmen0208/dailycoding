// usage of `is`
function isString(test: any): test is string{
  return typeof test === 'string';
}

function example(foo: any){
  if(isString(foo)){
      console.log('is a string' + foo);
      console.log(foo.length); // string function
  }
}
example('hello world');
