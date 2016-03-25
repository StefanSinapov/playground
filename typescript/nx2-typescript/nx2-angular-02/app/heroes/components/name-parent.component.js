System.register(['angular2/core', './name-child.component'], function(exports_1, context_1) {
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
    var core_1, name_child_component_1;
    var NameParentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (name_child_component_1_1) {
                name_child_component_1 = name_child_component_1_1;
            }],
        execute: function() {
            NameParentComponent = (function () {
                function NameParentComponent() {
                    this.names = ['Mr. IQ', '   ', '  Bombasto  '];
                }
                NameParentComponent = __decorate([
                    core_1.Component({
                        selector: 'name-parent',
                        template: "\n    <h2>Master controls {{names.length}} names</h2>\n    <name-child *ngFor=\"#name of names\"\n      [name]=\"name\">\n    </name-child>\n  ",
                        directives: [name_child_component_1.NameChildComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NameParentComponent);
                return NameParentComponent;
            }());
            exports_1("NameParentComponent", NameParentComponent);
        }
    }
});
//# sourceMappingURL=name-parent.component.js.map