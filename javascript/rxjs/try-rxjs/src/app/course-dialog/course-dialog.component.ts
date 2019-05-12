import {AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Course} from '../model/course';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';
import * as moment from 'moment';
import {fromEvent} from 'rxjs';
import {concatMap, distinctUntilChanged, exhaustMap, filter, mergeMap} from 'rxjs/operators';
import {fromPromise} from 'rxjs/internal-compatibility';

@Component({
    selector: 'course-dialog',
    templateUrl: './course-dialog.component.html',
    styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit, AfterViewInit {

    form: FormGroup;
    course: Course;

    @ViewChild('saveButton') saveButton: ElementRef;

    @ViewChild('searchInput') searchInput: ElementRef;

    constructor(
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) course: Course ) {

        this.course = course;

        this.form = fb.group({
            description: [course.description, Validators.required],
            category: [course.category, Validators.required],
            releasedAt: [moment(), Validators.required],
            longDescription: [course.longDescription, Validators.required]
        });

    }

    // Difference between mergeMap and concatMap is mergeMap would not wait util the first
    // observiable is finished. it would fire the observable at the same time.
    ngOnInit() {
      this.form.valueChanges
        .pipe(
          filter(() => this.form.valid),
          // concatMap(changes => this.saveCourse(changes))
          mergeMap(changes => this.saveCourse(changes))
        )
        .subscribe();


    }

    saveCourse(changes) {
      // console.log(changes);
      return fromPromise(fetch(`/api/courses/${this.course.id}`, {
        method: 'PUT',
        body: JSON.stringify(changes),
        headers: {
          'content-type': 'application/json'
        }
      }));
    }

    ngAfterViewInit() {
      fromEvent(this.saveButton.nativeElement, 'click')
        .pipe(
          exhaustMap(() => this.saveCourse(this.form.value))
        )
        .subscribe();

    }



    close() {
        this.dialogRef.close();
    }

}
