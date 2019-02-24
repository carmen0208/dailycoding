interface IComment {
  date: Date;
  message: string;
}

interface IDataService {
  getData(): unknown;
}

let service: IDataService = {
  getData() {
    return 122
  }
}

const response = service.getData()
// it not legal as say, it unknow, need to be check the value in order to get something back
// response.a.b.c

if( typeof response === "string") {
  console.log(response.toUpperCase());
} else if (isComment(response)) {
  response.date;
} else {
  const numbers = <number[]>response;
  numbers.indexOf(1);
}


function isComment(type: any): type is IComment {
  return (<IComment>type).message !== undefined;
}
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
