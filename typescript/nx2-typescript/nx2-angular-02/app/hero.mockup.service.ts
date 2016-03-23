import { IHero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable, Inject } from 'angular2/core';
import { ILogger } from './logger.service';
import { HeroService } from './hero.service'

@Injectable()
export class HeroMockupService implements HeroService {

    constructor(@Inject('ILogger') private _logger: ILogger) {
    }

    getHeroes(): any {
        return Promise.resolve(HEROES)
            .then(data => {

                this._logger.log(data);

                return data;
            });
    }

    // See the "Take it slow" appendix
    getHeroesSlowly() {
        return new Promise<IHero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 2000) // 2 seconds
        );
    }

    getHero(id: number) : any {
        return Promise.resolve(HEROES)
            .then(
                heroes => heroes.filter(hero => hero.id === id)[0]
            );
    }
}