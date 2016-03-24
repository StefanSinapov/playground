import { Component, OnInit, Inject } from 'angular2/core';
import { NgModel } from 'angular2/common';
import { Router } from 'angular2/router';

import { IHero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { ILogger } from './logger.service'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
    heroes: IHero[];
    selectedHero: IHero;
    newHeroName: string;

    constructor(
        private _router: Router,
        @Inject(HeroService) private _heroService: HeroService, @Inject('ILogger') private _logger: ILogger) { }

    getHeroes() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: IHero) { this.selectedHero = hero; }

    gotoDetail() {
        this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }

    addHero() {
        this._heroService.addHero(this.newHeroName)
            .then((hero) => {
                this.getHeroes();
                this.selectedHero = hero;
            })
            .catch((err) => this._logger.error(err));
    }

    back() {
        this.selectedHero = null;
    }
}
