import {Component, OnInit} from '@angular/core';
import {interval, noop, Observable, of, timer} from 'rxjs';
import {catchError, delayWhen, map, retryWhen, shareReplay, tap} from 'rxjs/operators';
import {createHttpObservable} from '../common/util';
import {Course} from '../model/course';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    beginnerCourses$: Observable<Course[]>;

    advancedCourses$: Observable<Course[]>;

    constructor() {

    }

    ngOnInit() {
      const http$ = createHttpObservable('api/courses');

      // shareReplay is a method that avoid multiply call for every subscribe
      const courses$: Observable<Course[]> = http$
        .pipe(
          tap(() => console.log('HTTP request executed')),
          map(res => Object.values(res['payload'])),
          shareReplay()
        );

      this.beginnerCourses$ = courses$
        .pipe(
          map(courses => courses.filter(course => course.category === 'BEGINNER'))
        );

      this.advancedCourses$ = courses$
        .pipe(
          map(courses => courses.filter(course => course.category === 'ADVANCED'))
        );

      // note: avoid lots of logic. especially callback hell in subscribe call
      courses$.subscribe(
        courses => {
          // this.beginnerCourses = courses.filter(course => course.category === 'BEGINNER');
          // this.advancedCourses = courses.filter(course => course.category === 'ADVANCED');
          console.log(courses);
        },
        noop,
        () => console.log('complate')
      );
    }

}
