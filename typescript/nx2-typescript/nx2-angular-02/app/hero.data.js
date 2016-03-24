System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroData;
    return {
        setters:[],
        execute: function() {
            HeroData = (function () {
                function HeroData() {
                }
                HeroData.prototype.createDb = function () {
                    var heroes = [
                        { "id": 11, "name": 'Mr. Nice' },
                        { "id": 12, "name": 'Narco' },
                        { "id": 13, "name": 'Bombasto' },
                        { "id": 14, "name": 'Celeritas' },
                        { "id": 15, "name": 'Magneta' },
                        { "id": 16, "name": 'RubberMan' },
                        { "id": 17, "name": 'Dynama' },
                        { "id": 18, "name": 'Dr IQ' },
                        { "id": 19, "name": 'Magma' },
                        { "id": 20, "name": 'Tornado' }
                    ];
                    return { heroes: heroes };
                };
                return HeroData;
            }());
            exports_1("HeroData", HeroData);
        }
    }
});
//# sourceMappingURL=hero.data.js.map