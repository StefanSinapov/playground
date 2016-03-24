import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { ClickMeComponent } from './click-me.component';
import { WikiComponent } from './wiki/wiki.component';
import { WikiSmartComponent } from './wiki/wiki-smart.component';
import { HeroFormComponent } from './hero-form.component';

export let routerConfig = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/hero/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/click-me',
        name: 'ClickMe',
        component: ClickMeComponent
    },
    {
        path: '/wiki/wiki',
        name: 'Wiki',
        component: WikiComponent
    },
    {
        path: '/wiki/wiki-smart',
        name: 'WikiSmart',
        component: WikiSmartComponent
    },
    {
        path: '/hero/new',
        name: 'HeroForm',
        component: HeroFormComponent
    }
];