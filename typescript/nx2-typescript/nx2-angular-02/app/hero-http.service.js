System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx', './hero'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, hero_1;
    var HeroHttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            HeroHttpService = (function () {
                function HeroHttpService(_logger, _http) {
                    this._logger = _logger;
                    this._http = _http;
                    this._heroesUrl = 'app/heroes.json'; // URL to we api
                    this._heroes = [];
                }
                HeroHttpService.prototype.getChachedHeroes = function () {
                    return this._heroes ? Promise.resolve(this._heroes) : this.getHeroes();
                };
                HeroHttpService.prototype.getHeroes = function () {
                    var _this = this;
                    return this._http.get(this._heroesUrl)
                        .map(function (res) { return (res.json().data); })
                        .do(function (heroes) { return _this._heroes = heroes; })
                        .do(function (data) { return _this._logger.log(data); })
                        .catch(this.handleErrorObservable)
                        .toPromise();
                };
                HeroHttpService.prototype.getHero = function (id) {
                    return Promise.resolve(this.getChachedHeroes())
                        .then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroHttpService.prototype.handleErrorObservable = function (err) {
                    this._logger.error(err);
                    return Observable_1.Observable.throw(err.json().error || 'Server error');
                };
                HeroHttpService.prototype.addHero = function (name) {
                    var _this = this;
                    return this.getChachedHeroes()
                        .then(function (heroes) {
                        var nextHeroId = heroes.reduce(function (prevMaxId, next) { return next.id > prevMaxId ? next.id : prevMaxId; }, 0) + 1;
                        var newHero = new hero_1.Hero(nextHeroId, name);
                        var body = JSON.stringify(newHero);
                        var headers = new http_1.Headers({
                            'Content-type': 'application/json'
                        });
                        var options = new http_1.RequestOptions({
                            headers: headers
                        });
                        return _this._http.post(_this._heroesUrl, body, options)
                            .toPromise()
                            .then(function (res) { return (res.json().data); })
                            .catch(_this.handleErrorObservable);
                    });
                };
                HeroHttpService.prototype.editHero = function (hero) {
                    var _this = this;
                    var body = JSON.stringify(hero);
                    var headers = new http_1.Headers({
                        'Content-type': 'application/json'
                    });
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this._http.put(this._heroesUrl + "/" + hero.id, body, options)
                        .toPromise()
                        .then(function (response) {
                        _this._logger.log(response);
                        if (response.status === 204) {
                            return Promise.resolve();
                        }
                        else {
                            return Promise
                                .reject("Error updating hero " + hero.id + ": " + hero.name + " - Status code: " + response.status);
                        }
                    })
                        .catch(this.handleErrorObservable);
                };
                HeroHttpService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject('ILogger')), 
                    __metadata('design:paramtypes', [Object, http_1.Http])
                ], HeroHttpService);
                return HeroHttpService;
            }());
            exports_1("HeroHttpService", HeroHttpService);
        }
    }
});
//# sourceMappingURL=hero-http.service.js.map