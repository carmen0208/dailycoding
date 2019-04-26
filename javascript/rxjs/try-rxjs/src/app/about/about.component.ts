import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // // multi value streams(emit multiply value and never complate)
    // document.addEventListener('click', evt => {
    //   console.log(evt);
    // });
    //
    // let counter = 0;
    // // multi value streams
    // setInterval(() => {
    //   console.log(counter);
    //   counter ++ ;
    //
    // }, 1000);
    //
    // // single value stream(emit one value and complate)
    // setTimeout(() => {
    //   console.log('Finished ......');
    // }, 3000);


    // callback hell if we want to make those 3 nest together
    // when click, then waiting for 3 seconds then start counts by 1 seconds
    document.addEventListener('click', evt => {
      console.log(evt);
      // single value stream(emit one value and complate)
      setTimeout(() => {
        console.log('Finished ......');
        let counter = 0;
        // multi value streams
        setInterval(() => {
          console.log(counter);
          counter ++ ;

        }, 1000);
      }, 3000);
    });
  }




}
