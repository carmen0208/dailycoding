import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {fromEvent, interval, timer} from 'rxjs';

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
    const interval$ = interval(1000);

    interval$.subscribe(val => {
      console.log('stream 1 =>' + val);
    });


    const timerInterval$ = timer(3000, 1000);
    timerInterval$.subscribe(val => {
      console.log('stream 2 =>' + val);

    });

    const click$ = fromEvent(document, 'click');

    click$.subscribe(evt => console.log(evt));

  }




}
