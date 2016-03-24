System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var WikipediaService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            WikipediaService = (function () {
                function WikipediaService(jsonp, _logger) {
                    this.jsonp = jsonp;
                    this._logger = _logger;
                }
                WikipediaService.prototype.search = function (term) {
                    var wikiUrl = 'http://en.wikipedia.org/w/api.php';
                    var params = new http_1.URLSearchParams();
                    params.set('search', term); // the user's search value
                    params.set('action', 'opensearch');
                    params.set('format', 'json');
                    params.set('callback', 'JSONP_CALLBACK');
                    return this.jsonp
                        .get(wikiUrl, { search: params })
                        .map(function (request) { return request.json()[1]; });
                };
                WikipediaService = __decorate([
                    core_1.Injectable(),
                    __param(1, core_1.Inject('ILogger')), 
                    __metadata('design:paramtypes', [http_1.Jsonp, Object])
                ], WikipediaService);
                return WikipediaService;
            }());
            exports_1("WikipediaService", WikipediaService);
        }
    }
});
//# sourceMappingURL=wikipedia.servce.js.map