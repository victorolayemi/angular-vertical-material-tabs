import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule, MatDividerModule, MatListModule } from '@angular/material';

import { VerticalTabsService } from './vertical-tabs.service';
import { DynamicTabAnchorDirective } from './dynamic-tab-anchor.directive';
import { VerticalTabComponent } from './vertical-tab.component';
import { VerticalTabsComponent } from './vertical-tabs.component';


@NgModule({
  declarations: [DynamicTabAnchorDirective, VerticalTabComponent, VerticalTabsComponent],
  imports: [
    CommonModule, FormsModule,
    FlexLayoutModule,
    MatListModule, MatDividerModule, MatButtonModule
  ],
  entryComponents: [VerticalTabComponent],
  exports: [VerticalTabComponent, VerticalTabsComponent]
})
export class VerticalTabsModule {
  public static forRoot(): ModuleWithProviders {
    return { ngModule: VerticalTabsModule, providers: [VerticalTabsService] };
  }
}
