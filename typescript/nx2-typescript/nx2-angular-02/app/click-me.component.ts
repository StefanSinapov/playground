import { Component } from 'angular2/core'
import { NgModel } from 'angular2/common';

@Component({
    selector: 'click-me',
    template: `
    <br/>
    <button (click)="onClickMe()">Click me!</button>
        {{clickMessage}}
    <br/>
    <br/>
     <input (keyup)="onKey($event)">
      <p>{{values}}</p>
    <hr/>
    <div>
      <p>Example: #box (keyup)="null"</p>
      <input #box (keyup)="null">
      <p>{{box.value}}</p>
    </div>
    <div>
        <input type="text" [(ngModel)]="value">
        <button (click)="add()">Add</button>
        <p>{{values2}}</p>
    <div>
`
})
export class ClickMeComponent {
    clickMessage = '';
    values: string;
    value: string;
    values2: string;

    onClickMe() {
        this.clickMessage = 'You are my hero!';
    }

    onKey(event: KeyboardEvent) {
        this.values += `${(event.target as HTMLInputElement).value} |`;
    }

    add() {
        this.values2 += ` | ${this.value}`;
    }
}