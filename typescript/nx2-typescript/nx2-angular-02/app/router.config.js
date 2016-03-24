System.register(['./dashboard.component', './heroes.component', './hero-detail.component', './click-me.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var dashboard_component_1, heroes_component_1, hero_detail_component_1, click_me_component_1;
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
                    path: '/detail/:id',
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
                }
            ]);
        }
    }
});
//# sourceMappingURL=router.config.js.map