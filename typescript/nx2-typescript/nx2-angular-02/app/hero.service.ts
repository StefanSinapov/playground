import { IHero } from './hero';

export abstract class HeroService {

    abstract getHeroes(): Promise<IHero[]>; 
    
    abstract getHero(id: number) : Promise<IHero>;
}