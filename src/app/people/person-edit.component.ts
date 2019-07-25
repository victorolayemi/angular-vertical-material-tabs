/**
 * Simple component to abstract the editing of a person
 * object.
 */

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { IPerson, PeopleService } from './people.service';

@Component({
  selector: 'app-person-edit',
  template: `
      <form [formGroup]="personForm" (ngSubmit)="onPersonFormSubmit()" fxLayout="column">
          <input type="hidden" formControlName="id">

          <div fxLayout="row" fxLayoutGap="20px" fxLayoutAlign="space-between">
              <mat-form-field fxFlex>
                  <input matInput placeholder="First name" id="name" formControlName="name">
              </mat-form-field>

              <mat-form-field fxFlex>
                  <input matInput placeholder="Surname" id="surname" formControlName="surname">
              </mat-form-field>
          </div>

          <mat-form-field fxFlex>
              <span matPrefix>@</span>
              <input matInput placeholder="Twitter" id="twitter" formControlName="twitter">
          </mat-form-field>

          <button type="submit" mat-raised-button>Save</button>
      </form>
  `
})
export class PersonEditComponent implements OnInit {
  personForm: FormGroup;

  @Input() person: IPerson;
  @Output() savePerson = new EventEmitter<any>();

  constructor(private fb: FormBuilder,
              private peopleService: PeopleService) {
    this.personForm = this.fb.group({
      id: '',
      name: '',
      surname: '',
      twitter: ''
    });
  }

  ngOnInit() {
    this.personForm.setValue({
      id: this.person.id || -1,
      name: this.person.name || '',
      surname: this.person.surname || '',
      twitter: this.person.twitter || ''
    });
  }

  onPersonFormSubmit() {
    this.peopleService.upsertPerson(this.personForm.value);
  }
}
