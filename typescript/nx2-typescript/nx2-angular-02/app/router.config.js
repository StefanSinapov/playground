System.register(['./dashboard.component', './heroes.component', './hero-detail.component', './click-me.component', './wiki/wiki.component', './wiki/wiki-smart.component', './hero-form.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dashboard_component_1, heroes_component_1, hero_detail_component_1, click_me_component_1, wiki_component_1, wiki_smart_component_1, hero_form_component_1;
    var routerConfig;
    return {
        setters:[
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (click_me_component_1_1) {
                click_me_component_1 = click_me_component_1_1;
            },
            function (wiki_component_1_1) {
                wiki_component_1 = wiki_component_1_1;
            },
            function (wiki_smart_component_1_1) {
                wiki_smart_component_1 = wiki_smart_component_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            }],
        execute: function() {
            exports_1("routerConfig", routerConfig = [
                {
                    path: '/dashboard',
                    name: 'Dashboard',
                    component: dashboard_component_1.DashboardComponent,
                    useAsDefault: true
                },
                {
                    path: '/hero/:id',
                    name: 'HeroDetail',
                    component: hero_detail_component_1.HeroDetailComponent
                },
                {
                    path: '/heroes',
                    name: 'Heroes',
                    component: heroes_component_1.HeroesComponent
                },
                {
                    path: '/click-me',
                    name: 'ClickMe',
                    component: click_me_component_1.ClickMeComponent
                },
                {
                    path: '/wiki/wiki',
                    name: 'Wiki',
                    component: wiki_component_1.WikiComponent
                },
                {
                    path: '/wiki/wiki-smart',
                    name: 'WikiSmart',
                    component: wiki_smart_component_1.WikiSmartComponent
                },
                {
                    path: '/hero/new',
                    name: 'HeroForm',
                    component: hero_form_component_1.HeroFormComponent
                }
            ]);
        }
    }
});
//# sourceMappingURL=router.config.js.map