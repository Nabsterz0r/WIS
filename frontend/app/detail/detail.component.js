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
var shared_service_1 = require("./../shared.service");
var DetailComponent = (function () {
    function DetailComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.title = 'detail';
        this.userId = '';
        this.user = {};
        this.images = [];
        this.userId = _sharedService.userId;
        this.getUserData();
        this.getUsersPhoto(this.userId);
    }
    DetailComponent.prototype.getUserData = function () {
        var _this = this;
        this._sharedService.getUserById(this.userId)
            .subscribe(function (data) {
            _this.user = data;
            // this.images_id = data.images;
        });
    };
    DetailComponent.prototype.getUsersPhoto = function (userId) {
        var _this = this;
        this._sharedService.getImagesById(this.userId)
            .subscribe(function (data) {
            // for (const item in data) {
            //     let index = this.images_id.indexOf(data[item].id)
            //     if (index > -1 ) {
            //         this.images.push(data[item])
            //     }
            //     debugger;
            // }
            _this.images = data;
        });
    };
    DetailComponent.prototype.vote = function (id) {
        var _this = this;
        this._sharedService.updateLike(id)
            .subscribe(function (data) {
            debugger;
            var photo = _this.images.find(function (elem, index) {
                return elem.id == data.id ? true : false;
            });
            photo.like = data.likes;
        });
    };
    DetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detail',
            templateUrl: 'detail.component.html',
            styleUrls: ['detail.component.css'],
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], DetailComponent);
    return DetailComponent;
}());
exports.DetailComponent = DetailComponent;
//# sourceMappingURL=detail.component.js.map