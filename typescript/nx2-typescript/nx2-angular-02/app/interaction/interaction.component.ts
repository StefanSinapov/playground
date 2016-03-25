import {Component} from 'angular2/core';
import {NameParentComponent} from './name-parent.component'
import {VersionParentComponent} from './version-parent.component'
import {VoteTakerComponent} from './voter-taker.component';
import {MissionControlComponent} from './mission-control.component';
import {HeroParentComponent} from '../heroes/components/hero-parent.component';

@Component({
    selector: 'hero-parent',
    template: `
<div class='container'>
    <div class='row'>
        <div class='col-md-12'>
            <mission-control></mission-control>
        </div>
    </div>
    <div class='row'>
        <div class='col-md-3'>
            <hero-parent></hero-parent>
        </div>
        <div class='col-md-3'>
            <h2>Intercept input property changes with a setter</h2>
            <name-parent></name-parent>
        </div>
        <div class='col-md-3'>
            <h2>Version</h2>
            <version-parent></version-parent>
        </div>
        <div class='col-md-3'>
            <h2>Parent listens for child event</h2>
            <vote-taker></vote-taker>
        </div>
    </div>
</div>
  `,
    directives: [HeroParentComponent, NameParentComponent, VersionParentComponent, VoteTakerComponent, MissionControlComponent]
})
export class InteractionComponent {

}