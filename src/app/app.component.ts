import { Component, ViewChild } from '@angular/core';

import { VerticalTabsComponent } from '../../projects/vertical-tabs/src/vertical-tabs/vertical-tabs.component';
import { IPerson, PeopleService } from './people/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('personEdit', { static: true }) personEditTemplate;
  @ViewChild(VerticalTabsComponent, { static: true }) tabsComponent: VerticalTabsComponent;
  people: IPerson[];

  constructor(public peopleService: PeopleService) {
    this.peopleService.people$.subscribe(
      people => this.people = people
    );
  }

  onEditPerson(person) {
    this.tabsComponent
      .openTab(
        `Editing ${person.name}`,
        this.personEditTemplate,
        person,
        true
      );
  }

  onAddPerson() {
    this.tabsComponent
      .openTab(
        'New Person',
        this.personEditTemplate,
        {},
        true
      );
  }

  onPersonFormSubmit(person) {
    this.peopleService.upsertPerson(person);
    this.tabsComponent.closeActiveTab();
  }
}
