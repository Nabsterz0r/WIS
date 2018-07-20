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
var PhotoComponent = (function () {
    function PhotoComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.images = [];
        this.getImages();
    }
    PhotoComponent.prototype.getImages = function () {
        var _this = this;
        this._sharedService.getImages()
            .subscribe(function (data) {
            _this.images = data;
        });
    };
    PhotoComponent.prototype.vote = function (id) {
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
    PhotoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'photo',
            templateUrl: 'photo.component.html',
            styleUrls: ['photo.component.css'],
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], PhotoComponent);
    return PhotoComponent;
}());
exports.PhotoComponent = PhotoComponent;
//# sourceMappingURL=photo.component.js.map