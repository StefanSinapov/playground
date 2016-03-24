System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ClickMeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ClickMeComponent = (function () {
                function ClickMeComponent() {
                    this.clickMessage = '';
                }
                ClickMeComponent.prototype.onClickMe = function () {
                    this.clickMessage = 'You are my hero!';
                };
                ClickMeComponent.prototype.onKey = function (event) {
                    this.values += event.target.value + " |";
                };
                ClickMeComponent.prototype.add = function () {
                    this.values2 += " | " + this.value;
                };
                ClickMeComponent = __decorate([
                    core_1.Component({
                        selector: 'click-me',
                        template: "\n    <br/>\n    <button (click)=\"onClickMe()\">Click me!</button>\n        {{clickMessage}}\n    <br/>\n    <br/>\n     <input (keyup)=\"onKey($event)\">\n      <p>{{values}}</p>\n    <hr/>\n    <div>\n      <p>Example: #box (keyup)=\"null\"</p>\n      <input #box (keyup)=\"null\">\n      <p>{{box.value}}</p>\n    </div>\n    <div>\n        <input type=\"text\" [(ngModel)]=\"value\">\n        <button (click)=\"add()\">Add</button>\n        <p>{{values2}}</p>\n    <div>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ClickMeComponent);
                return ClickMeComponent;
            }());
            exports_1("ClickMeComponent", ClickMeComponent);
        }
    }
});
//# sourceMappingURL=click-me.component.js.map