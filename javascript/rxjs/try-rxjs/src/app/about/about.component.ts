import {Component, OnInit} from '@angular/core';
import {concat, interval, merge, noop, Observable, of} from 'rxjs';
import {createHttpObservable} from '../common/util';
import {map} from 'rxjs/operators';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // // callback hell if we want to make those 3 nest together
    // // when click, then waiting for 3 seconds then start counts by 1 seconds
    // document.addEventListener('click', evt => {
    //   console.log(evt);
    //   // single value stream(emit one value and complate)
    //   setTimeout(() => {
    //     console.log('Finished ......');
    //     let counter = 0;
    //     // multi value streams
    //     setInterval(() => {
    //       console.log(counter);
    //       counter ++ ;
    //
    //     }, 1000);
    //   }, 3000);
    // });

    // vulctrl+shift+p get interval$ type is  Observable<number>
    // const interval$ = interval(1000);
    //
    // const sub = interval$.subscribe(val => {
    //   console.log('stream 1 =>' + val);
    // });
    //
    // setTimeout(() => sub.unsubscribe(), 5000);
    //
    // const timerInterval$ = timer(3000, 1000);
    // const sub2 = timerInterval$.subscribe(val => {
    //   console.log('stream 2 =>' + val);
    // });
    //
    // setTimeout(() => sub2.unsubscribe(), 5000);
    //
    //
    // const click$ = fromEvent(document, 'click');
    //
    // click$.subscribe(
    //   evt => console.log(evt),
    //   err => console.log(err),
    //   () => console.log('complated')
    // );

    // const source1$ = of(1, 2, 3);
    // const source2$ = of( 4, 5, 6);
    // const source3$ = of( 7, 8, 9);
    //
    // const result$ = concat(source1$, source2$, source3$);
    //
    // result$.subscribe(console.log);

    // interval(1000) increase 1 for every 1 second.
    // const interval1$ = interval(1000);
    // const interval2$ = interval1$.pipe(map(val => 10 * val));
    // const result$ = merge(interval1$, interval2$);
    // result$.subscribe(console.log);


    // unsubscribe

    // const interval$ = interval(1000);
    // const sub = interval$.subscribe(console.log);
    // setTimeout( () => sub.unsubscribe(), 5000);

    // test unsubscribe for httpObservable
    const http$ = createHttpObservable('/api/courses');
    const sub = http$.subscribe(console.log);

    setTimeout(() => sub.unsubscribe(), 0 );
  }


}
