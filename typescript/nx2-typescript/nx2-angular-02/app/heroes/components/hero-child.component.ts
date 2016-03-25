import { Component, Input } from 'angular2/core';
import { IHero } from '../../hero'

@Component({
    selector: 'hero-child',
    template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, <strong>{{masterName}}</strong>.</p>
  `
})
export class HeroChildComponent {
    @Input() hero: IHero;
    @Input('master') masterName: string;
}