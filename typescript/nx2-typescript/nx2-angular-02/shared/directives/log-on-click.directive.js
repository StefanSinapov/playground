System.register(['angular2/core', './../../app/logger.service'], function(exports_1, context_1) {
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
    var core_1, logger_service_1;
    var LogOnClickDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (logger_service_1_1) {
                logger_service_1 = logger_service_1_1;
            }],
        execute: function() {
            LogOnClickDirective = (function () {
                function LogOnClickDirective(_logger) {
                    this._logger = _logger;
                }
                LogOnClickDirective.prototype.onClick = function () {
                    this._logger.warn('Element clicked!');
                };
                ;
                __decorate([
                    core_1.HostListener('click'), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], LogOnClickDirective.prototype, "onClick", null);
                LogOnClickDirective = __decorate([
                    core_1.Directive({
                        selector: '[myLogOnClick]'
                    }),
                    __param(0, core_1.Inject(logger_service_1.ILoggerToken)), 
                    __metadata('design:paramtypes', [Object])
                ], LogOnClickDirective);
                return LogOnClickDirective;
            }());
            exports_1("LogOnClickDirective", LogOnClickDirective);
        }
    }
});
//# sourceMappingURL=log-on-click.directive.js.map