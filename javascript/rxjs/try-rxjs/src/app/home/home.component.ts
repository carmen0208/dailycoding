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
    beginnerCourses: Course[];

    advancedCourses: Course[];

    constructor() {

    }

    ngOnInit() {
      const http$ = createHttpObservable('api/courses');

      const course$ = http$.pipe(
        map(res => Object.values(res['payload']))
      );

      // note: avoid lots of logic. especially callback hell in subscribe call
      course$.subscribe(
        courses => {
          this.beginnerCourses = courses.filter(course => course.category === 'BEGINNER');
          this.advancedCourses = courses.filter(course => course.category === 'ADVANCED');
        },
        noop,
        () => console.log('complate')
      );
    }

}
