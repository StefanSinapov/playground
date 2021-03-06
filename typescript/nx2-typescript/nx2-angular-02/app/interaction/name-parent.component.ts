﻿import {Component} from 'angular2/core';
import {NameChildComponent} from './name-child.component';

@Component({
    selector: 'name-parent',
    template: `
    <h2>Master controls {{names.length}} names</h2>
    <name-child *ngFor="#name of names"
      [name]="name">
    </name-child>
  `,
    directives: [NameChildComponent]
})
export class NameParentComponent {
    names = ['Mr. IQ', '   ', '  Bombasto  '];
}