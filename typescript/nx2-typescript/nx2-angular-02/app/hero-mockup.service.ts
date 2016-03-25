import { IHero, Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Injectable, Inject } from 'angular2/core';
import { ILogger, ILoggerToken as ILogger_Token } from './logger.service';
import { HeroService } from './hero.service';

@Injectable()
export class HeroMockupService implements HeroService {

    constructor( @Inject(ILogger_Token) private _logger: ILogger) {
    }

    getHeroes(): Promise<IHero[]> {
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

    getHero(id: number): Promise<IHero> {
        return Promise.resolve(HEROES)
            .then(
                heroes => heroes.filter(hero => hero.id === id)[0]
            );
    }

    addHero(name: string): Promise<IHero> {
        const nextHeroId = HEROES.reduce((prevMaxId, next) => next.id > prevMaxId ? next.id : prevMaxId, 0) + 1;
        const newHero = new Hero(nextHeroId, name);
        HEROES.push(newHero);
        return Promise.resolve(newHero);
    }

    editHero(newHero: IHero): Promise<void> {
        const heroToUpdate = HEROES.filter((hero) => hero.id === newHero.id);
        if (heroToUpdate.length === 1) {
            heroToUpdate[0] = newHero;
            return Promise.resolve();
        } else {
            return Promise.reject(`Can't find hero with id: ${newHero.id}`);
        }
    }

    deleteHero(heroId: number): Promise<void> { throw new Error('Not implemented'); }
}