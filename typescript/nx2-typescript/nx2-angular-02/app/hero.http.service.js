System.register(['./mock-heroes', 'angular2/core'], function(exports_1, context_1) {
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
    var mock_heroes_1, core_1;
    var HeroHttpService;
    return {
        setters:[
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroHttpService = (function () {
                function HeroHttpService(_logger) {
                    this._logger = _logger;
                }
                HeroHttpService.prototype.getHeroes = function () {
                    var _this = this;
                    return Promise.resolve(mock_heroes_1.HEROES)
                        .then(function (data) {
                        _this._logger.log(data);
                        return data;
                    });
                };
                // See the "Take it slow" appendix
                HeroHttpService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(mock_heroes_1.HEROES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                HeroHttpService.prototype.getHero = function (id) {
                    return Promise.resolve(mock_heroes_1.HEROES)
                        .then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroHttpService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject('ILogger')), 
                    __metadata('design:paramtypes', [Object])
                ], HeroHttpService);
                return HeroHttpService;
            }());
            exports_1("HeroHttpService", HeroHttpService);
        }
    }
});
//# sourceMappingURL=hero.http.service.js.map