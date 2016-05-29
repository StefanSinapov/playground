import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import {Title} from '@angular/platform-browser';
import {provide} from '@angular/core';
import {APP_BASE_HREF, PathLocationStrategy, LocationStrategy} from '@angular/common';

import { Nx1AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(Nx1AppComponent, [
  Title,
  ROUTER_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' }),
  provide(LocationStrategy, { useClass: PathLocationStrategy })
]);

