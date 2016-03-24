import { Component, provide } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS, XHRBackend } from 'angular2/http';

import { HeroService } from './hero.service';
import { HeroHttpService } from './hero-http.service';
import { ILogger } from './logger.service';
import { Logger } from './console.logger.service';
import { routerConfig } from './router.config'
import { HeroData } from './hero.data';
import { InMemoryBackendService, SEED_DATA } from 'a2-in-memory-web-api/core';

@
Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink] = "['ClickMe']">Click me demo</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS, HTTP_PROVIDERS,
        provide(HeroService, { useClass: HeroHttpService }),
        provide(XHRBackend, { useClass: InMemoryBackendService }),
        provide(SEED_DATA, { useClass: HeroData }),
        provide('ILogger', { useClass: Logger })
    ]
})
@RouteConfig(routerConfig)
export class AppComponent {
    title = 'Tour of Heroes';
}