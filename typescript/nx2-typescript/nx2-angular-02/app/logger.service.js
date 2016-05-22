System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var ILoggerToken;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            exports_1("ILoggerToken", ILoggerToken = new core_1.OpaqueToken('ILogger'));
        }
    }
});
//# sourceMappingURL=logger.service.js.map