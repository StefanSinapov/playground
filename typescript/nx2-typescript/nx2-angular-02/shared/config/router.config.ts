import { DashboardComponent } from '../../app/dashboard.component';
import { HeroesComponent } from '../../app/heroes.component';
import { HeroDetailComponent } from '../../app/hero-detail.component';
import { ClickMeComponent } from '../../app/click-me.component';
import { WikiComponent } from '../../app/wiki/wiki.component';
import { WikiSmartComponent } from '../../app/wiki/wiki-smart.component';
import { HeroFormComponent } from '../../app/hero-form.component';
import { InteractionComponent } from '../../app/interaction/interaction.component';
import { HeroAsyncMessageComponent } from '../../app/heroes/components/hero-async-message.component';

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
    },
    {
        path: '/interaction',
        name: 'Interaction',
        component: InteractionComponent
    },
    {
        path: '/pipes',
        name: 'HeroAsyncMessage',
        component: HeroAsyncMessageComponent
    }
];