System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DomLogger;
    return {
        setters:[],
        execute: function() {
            DomLogger = (function () {
                function DomLogger(elementId) {
                    this.element = document.getElementById(elementId);
                }
                DomLogger.prototype.log = function () {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i - 0] = arguments[_i];
                    }
                    args.forEach(function (value) { return _this.element.innerHTML += value.toString(); });
                    this.element.innerHTML += "<br/>";
                };
                return DomLogger;
            }());
            exports_1("DomLogger", DomLogger);
        }
    }
});
//# sourceMappingURL=domLogger.js.map