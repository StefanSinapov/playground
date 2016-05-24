import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Nx1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Nx1AppComponent);

