import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

export interface IPerson {
  id: number;
  name: string;
  surname: string;
  twitter: string;
}

@Injectable()
export class PeopleService {
  private people: IPerson[];

  public peopleSubject$: Subject<IPerson[]> = new Subject();
  public people$: Observable<IPerson[]> = this.peopleSubject$.asObservable();

  constructor() {
    this.upsertPerson(
      {
        id: 1,
        name: 'Juri',
        surname: 'Strumpflohner',
        twitter: '@juristr'
      }
    );
  }

  upsertPerson(person: IPerson) {
    let change = false;

    if (this.people && this.people.length)
      if (this.people[this.people.length - 1].id === person.id) {
        change = true;
        this.people.push(person);
      } else
        this.people = this.people.map(
          man => {
            if (man.id === person.id) {
              change = true;
              return person;
            }
            return man;
          }
        );
    else {
      this.people = [person];
      change = true;
    }

    if (!change) this.people.push(person);

    this.peopleSubject$.next(this.people);
  }
}
