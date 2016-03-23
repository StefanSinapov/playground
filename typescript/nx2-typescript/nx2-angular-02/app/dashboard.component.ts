import { Component, OnInit, Inject } from 'angular2/core'
import { Router } from 'angular2/router';
import { HeroService } from './hero.service'
import { IHero } from './hero'


@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    heroes: IHero[];

    constructor( @Inject(HeroService) private _heroService: HeroService, private _router: Router) { }

    ngOnInit(): any {
        this.loadHeroes();
    }

    loadHeroes(): void {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: IHero) {
        let link = ['HeroDetail', { id: hero.id }];
        this._router.navigate(link);
    }
}