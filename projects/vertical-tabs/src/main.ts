import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { VerticalTabsModule } from './vertical-tabs/vertical-tabs.module';

if (environment.production)
  enableProdMode();

platformBrowserDynamic().bootstrapModule(VerticalTabsModule)
  .catch(err => console.error(err));
