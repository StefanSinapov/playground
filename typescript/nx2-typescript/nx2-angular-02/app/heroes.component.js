System.register(['angular2/core', 'angular2/router', './hero-detail.component', './hero.service', './logger.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, router_1, hero_detail_component_1, hero_service_1, logger_service_1;
    var HeroesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            HeroesComponent = (function () {
                function HeroesComponent(_router, _heroService, _logger) {
                    this._router = _router;
                    this._heroService = _heroService;
                    this._logger = _logger;
                }
                HeroesComponent.prototype.getHeroes = function () {
                    var _this = this;
                    this._heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
                };
                HeroesComponent.prototype.ngOnInit = function () {
                    this.getHeroes();
                };
                HeroesComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
                HeroesComponent.prototype.gotoDetail = function () {
                    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
                };
                HeroesComponent.prototype.addHero = function () {
                    var _this = this;
                    this._heroService.addHero(this.newHeroName)
                        .then(function (hero) {
                        _this.getHeroes();
                        _this.selectedHero = hero;
                    })
                        .catch(this.serviceError);
                };
                HeroesComponent.prototype.back = function () {
                    this.selectedHero = null;
                };
                HeroesComponent.prototype.deleteHero = function () {
                    var _this = this;
                    this._heroService.deleteHero(this.selectedHero.id)
                        .then(function () {
                        _this.selectedHero = null;
                        _this.getHeroes();
                    })
                        .catch(this.serviceError);
                };
                HeroesComponent.prototype.serviceError = function (err) {
                    this._logger.error(err);
                };
                HeroesComponent = __decorate([
                    core_1.Component({
                        selector: 'my-heroes',
                        templateUrl: 'app/heroes.component.html',
                        styleUrls: ['app/heroes.component.css'],
                        directives: [hero_detail_component_1.HeroDetailComponent]
                    }),
                    __param(1, core_1.Inject(hero_service_1.HeroService)),
                    __param(2, core_1.Inject(logger_service_1.ILoggerToken)), 
                    __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, Object])
                ], HeroesComponent);
                return HeroesComponent;
            }());
            exports_1("HeroesComponent", HeroesComponent);
        }
    }
});
//# sourceMappingURL=heroes.component.js.map