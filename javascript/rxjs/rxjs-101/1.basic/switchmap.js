import { Observable } from 'rxjs/Rx'
// const  = Rx.Observable;


// App logic
const startButton = document.querySelector('#start');

// Observable.fromEvent(startButton, 'click')
//   .switchMap((event)=>Observable.interval(1000))
//   .subscribe((x)=> console.log(x));

const start$ = Observable.fromEvent(startButton, 'click')
const interval$ = Observable.interval(1000)

start$
  .switchMap((event)=>interval$)
  .subscribe((x)=> console.log(x));
