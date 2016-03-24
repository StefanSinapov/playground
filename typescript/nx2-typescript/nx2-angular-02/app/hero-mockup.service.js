System.register(['./hero', './mock-heroes', 'angular2/core'], function(exports_1, context_1) {
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
    var hero_1, mock_heroes_1, core_1;
    var HeroMockupService;
    return {
        setters:[
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroMockupService = (function () {
                function HeroMockupService(_logger) {
                    this._logger = _logger;
                }
                HeroMockupService.prototype.getHeroes = function () {
                    var _this = this;
                    return Promise.resolve(mock_heroes_1.HEROES)
                        .then(function (data) {
                        _this._logger.log(data);
                        return data;
                    });
                };
                // See the "Take it slow" appendix
                HeroMockupService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                HeroMockupService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heroes_1.HEROES)
                        .then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroMockupService.prototype.addHero = function (name) {
                    var nextHeroId = mock_heroes_1.HEROES.reduce(function (prevMaxId, next) { return next.id > prevMaxId ? next.id : prevMaxId; }, 0) + 1;
                    var newHero = new hero_1.Hero(nextHeroId, name);
                    mock_heroes_1.HEROES.push(newHero);
                    return Promise.resolve(newHero);
                };
                HeroMockupService.prototype.editHero = function (newHero) {
                    var heroToUpdate = mock_heroes_1.HEROES.filter(function (hero) { return hero.id === newHero.id; });
                    if (heroToUpdate.length === 1) {
                        heroToUpdate[0] = newHero;
                        return Promise.resolve();
                    }
                    else {
                        return Promise.reject("Can't find hero with id: " + newHero.id);
                    }
                };
                HeroMockupService.prototype.deleteHero = function (heroId) { throw new Error('Not implemented'); };
                HeroMockupService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject('ILogger')), 
                    __metadata('design:paramtypes', [Object])
                ], HeroMockupService);
                return HeroMockupService;
            }());
            exports_1("HeroMockupService", HeroMockupService);
        }
    }
});
//# sourceMappingURL=hero-mockup.service.js.map