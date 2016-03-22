System.register(['domLogger'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var domLogger_1;
    var logger, Disposable, Activatable, SmartObject, smartObj, x, y;
    function applyMixins(derivedCtor, baseCtors) {
        baseCtors.forEach(function (baseCtor) {
            Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
                if (!derivedCtor.prototype[name]) {
                    derivedCtor.prototype[name] = baseCtor.prototype[name];
                }
            });
        });
    }
    return {
        setters:[
            function (domLogger_1_1) {
                domLogger_1 = domLogger_1_1;
            }],
        execute: function() {
            logger = new domLogger_1.DomLogger('container');
            // Disposable Mixin
            Disposable = (function () {
                function Disposable() {
                }
                Disposable.prototype.dispose = function () {
                    this.isDisposed = true;
                };
                return Disposable;
            }());
            // Activatable Mixin
            Activatable = (function () {
                function Activatable() {
                }
                Activatable.prototype.activate = function () {
                    this.isActive = true;
                };
                Activatable.prototype.deactivate = function () {
                    this.isActive = false;
                };
                return Activatable;
            }());
            SmartObject = (function () {
                function SmartObject() {
                    var _this = this;
                    // Disposable
                    this.isDisposed = false;
                    this.dispose = function () {
                        clearInterval(_this.interval);
                        _this.isDisposed = true;
                    };
                    // Activatable
                    this.isActive = false;
                    this.interval = setInterval(function () { return console.log(_this.isActive + ' : ' + _this.isDisposed); }, 500);
                }
                SmartObject.prototype.interact = function () {
                    this.activate();
                };
                return SmartObject;
            }());
            applyMixins(SmartObject, [Disposable, Activatable]);
            smartObj = new SmartObject();
            setTimeout(function () { return smartObj.interact(); }, 1000);
            setTimeout(function () { return smartObj.dispose(); }, 5000);
            //window.onmousedown = function (mouseEvent) {
            //    console.log(mouseEvent.buton);  //<- Now, no error is given because  
            //};
            x = function (a) { return 0; };
            y = function (b, s) { return 0; };
            y = x; // OK
        }
    }
});
//x = y; // Error 
//# sourceMappingURL=mixins.js.map