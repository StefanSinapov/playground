System.register(['angular2/core', './name-parent.component', './version-parent.component', './voter-taker.component', './mission-control.component', '../heroes/components/hero-parent.component'], function(exports_1, context_1) {
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
    var core_1, name_parent_component_1, version_parent_component_1, voter_taker_component_1, mission_control_component_1, hero_parent_component_1;
    var InteractionComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (name_parent_component_1_1) {
                name_parent_component_1 = name_parent_component_1_1;
            },
            function (version_parent_component_1_1) {
                version_parent_component_1 = version_parent_component_1_1;
            },
            function (voter_taker_component_1_1) {
                voter_taker_component_1 = voter_taker_component_1_1;
            },
            function (mission_control_component_1_1) {
                mission_control_component_1 = mission_control_component_1_1;
            },
            function (hero_parent_component_1_1) {
                hero_parent_component_1 = hero_parent_component_1_1;
            }],
        execute: function() {
            InteractionComponent = (function () {
                function InteractionComponent() {
                }
                InteractionComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-parent',
                        template: "\n<div class='container'>\n    <div class='row'>\n        <div class='col-md-12'>\n            <mission-control></mission-control>\n        </div>\n    </div>\n    <div class='row'>\n        <div class='col-md-3'>\n            <hero-parent></hero-parent>\n        </div>\n        <div class='col-md-3'>\n            <h2>Intercept input property changes with a setter</h2>\n            <name-parent></name-parent>\n        </div>\n        <div class='col-md-3'>\n            <h2>Version</h2>\n            <version-parent></version-parent>\n        </div>\n        <div class='col-md-3'>\n            <h2>Parent listens for child event</h2>\n            <vote-taker></vote-taker>\n        </div>\n    </div>\n</div>\n  ",
                        directives: [hero_parent_component_1.HeroParentComponent, name_parent_component_1.NameParentComponent, version_parent_component_1.VersionParentComponent, voter_taker_component_1.VoteTakerComponent, mission_control_component_1.MissionControlComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InteractionComponent);
                return InteractionComponent;
            }());
            exports_1("InteractionComponent", InteractionComponent);
        }
    }
});
//# sourceMappingURL=interaction.component.js.map