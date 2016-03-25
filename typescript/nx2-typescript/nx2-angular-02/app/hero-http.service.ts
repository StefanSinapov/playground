/// <reference path="../typings/browser/ambient/es6-shim/index.d.ts" />
import { Injectable, Inject } from 'angular2/core';
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/Rx';

import { ILogger, ILoggerToken as ILogger_Token } from './logger.service';
import { HeroService } from './hero.service';
import { IHero, Hero } from './hero';

@Injectable()
export class HeroHttpService implements HeroService {

    private _heroesUrl = 'app/heroes.json'; // URL to we api
    private _heroes: IHero[] = [];

    constructor( @Inject(ILogger_Token) private _logger: ILogger, private _http: Http) {
    }

    private getChachedHeroes(): Promise<IHero[]> {
        return this._heroes ? Promise.resolve(this._heroes) : this.getHeroes();
    }

    getHeroes(): Promise<IHero[]> {
        return this._http.get(this._heroesUrl)
            .map((res) => (res.json().data as IHero[]))
            .do((heroes) => this._heroes = heroes)
            .do((data) => this._logger.log(data))
            .catch(this.handleErrorObservable)
            .toPromise();
    }

    getHero(id: number): Promise<IHero> {
        return Promise.resolve(this.getChachedHeroes())
            .then((heroes) => heroes.filter(hero => hero.id === id)[0]);
    }

    handleErrorObservable(err: Response): Observable<any> {
        this._logger.error(err);

        return Observable.throw(err.json().error || 'Server error');
    }

    addHero(name: string): Promise<IHero> {
        return this.getChachedHeroes()
            .then((heroes) => {
                const nextHeroId = heroes.reduce((prevMaxId, next) => next.id > prevMaxId ? next.id : prevMaxId, 0) + 1;
                const newHero = new Hero(nextHeroId, name);
                const body = JSON.stringify(newHero);
                const headers = new Headers({
                    'Content-type': 'application/json'
                });
                const options = new RequestOptions({
                    headers: headers
                });
                return this._http.post(this._heroesUrl, body, options)
                    .toPromise()
                    .then((res) => (res.json().data as IHero))
                    .catch(this.handleErrorObservable);
            });
    }

    editHero(hero: IHero): Promise<void> {
        const body = JSON.stringify(hero);
        const headers = new Headers({
            'Content-type': 'application/json'
        });
        const options = new RequestOptions({
            headers: headers
        });
        return this._http.put(`${this._heroesUrl}/${hero.id}`, body, options)
            .toPromise()
            .then((response) => {
                this._logger.log(response);
                if (response.status === 204) { // No content
                    return Promise.resolve();
                } else {
                    return Promise
                        .reject(`Error updating hero ${hero.id}: ${hero.name} - Status code: ${response.status}`);
                }
            })
            .catch(this.handleErrorObservable);
    }

    deleteHero(id: number): Promise<void> {
        return this._http.delete(`${this._heroesUrl}/${id}`)
            .toPromise()
            .then((response) => {
                this._logger.log(response);
                if (response.status === 204) { // No content
                    return Promise.resolve();
                } else {
                    return Promise
                        .reject(`Error deleting hero ${id} - Status code: ${response.status}`);
                }
            })
            .catch(this.handleErrorObservable);
    }
}