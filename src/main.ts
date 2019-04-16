import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { PropertyBindingModule } from './binding-property/property.module';
import { EventBindingModule } from './binding-event/event.module';
import { TwoWayBindingModule } from './binding-two-way/two-way.module';

platformBrowserDynamic().bootstrapModule(EventBindingModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));