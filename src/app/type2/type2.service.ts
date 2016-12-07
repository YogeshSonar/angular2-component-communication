import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Type2Service {
  private counter: number;
  private subject: Subject<number>;

  constructor() {
    this.counter = 0;
    this.subject = new Subject<number>();
  }

  setCounter(value): void{
    this.counter = value;
    this.subject.next(this.counter);
  }

  getCounter(): Observable<number>{
    return this.subject.asObservable();
  }

}
