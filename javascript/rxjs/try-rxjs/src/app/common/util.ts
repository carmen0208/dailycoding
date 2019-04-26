import {Observable} from 'rxjs';

export function createHttpObservable(api: string) {
  return Observable.create(observer => {
    fetch(api).then(response => {
      return response.json();
    }).then(body => {
      observer.next(body);
      observer.complete();
    }).catch(err => {
      observer.error(err);
    });
  });
}

