import { Component, OnInit, Inject } from 'angular2/core';
import {RouteParams} from 'angular2/router';

import { IHero } from './hero';
import { HeroService } from './hero.service';
import { ILogger } from './logger.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css'],
    inputs: ['hero']
})
export class HeroDetailComponent implements OnInit {
    hero: IHero;

    constructor(
        @Inject(HeroService) private _heroService: HeroService,
        private _routeParams: RouteParams,
        @Inject('ILogger') private _logger: ILogger) {
    }

    ngOnInit() {
        const id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }

    update(): void {
        this._heroService.editHero(this.hero)
            .catch((error) => this._logger.error(error));
    }
}