/**
 * Very simple component that renders a list of people
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IPerson, PeopleService } from './people.service';

@Component({
  selector: 'app-people-list',
  template: `
      <table class="mat-table">
          <thead>
          <th>Name</th>
          <th>Surname</th>
          <th>Twitter</th>
          <th></th>
          </thead>
          <tbody>
          <tr *ngFor="let person of people">
              <td>{{ person.name }}</td>
              <td>{{ person.surname }}</td>
              <td><a href="https://twitter.com/{{ person.twitter }}" target="_blank">{{ person.twitter }}</a></td>
              <td>
                  <button mat-raised-button color="accent" (click)="editPerson.emit(person)">Edit</button>
              </td>
          </tr>
          </tbody>
      </table>
      <button mat-raised-button color="primary" (click)="addPerson.emit()">Add new person</button>
  `,
  styles: [
      `.mat-table {
          display: block;
      }

      .mat-row,
      .mat-header-row {
          display: flex;
          border-bottom-width: 1px;
          border-bottom-style: solid;
          align-items: center;
          min-height: 48px;
          padding: 0 24px;
      }

      .mat-cell,
      .mat-header-cell {
          flex: 1;
          overflow: hidden;
          word-wrap: break-word;
      }`
  ]
})
export class PeopleListComponent {
  @Input() people: IPerson[];
  @Output() addPerson = new EventEmitter<any>();
  @Output() editPerson = new EventEmitter<any>();
}
