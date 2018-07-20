"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var detail_component_1 = require('./detail/detail.component');
var list_component_1 = require('./list/list.component');
var app_routing_1 = require('./app.routing');
var shared_service_1 = require("./shared.service");
var photo_component_1 = require('./photo/photo.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.CONST_ROUTING,
                http_1.HttpModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                list_component_1.ListComponent,
                detail_component_1.DetailComponent,
                photo_component_1.PhotoComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
                shared_service_1.SharedService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map