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
require('file-saver');
var ListComponent = (function () {
    function ListComponent(_sharedService) {
        this._sharedService = _sharedService;
        this.title = 'Usasdasdadss db';
        this.users = [];
        this.newUserName = '';
        this.newUserSurname = '';
        this.order_by = '';
        this.filter = '';
        this.filter_name = '';
        this.filter_surname = '';
        this.getUsers();
    }
    ListComponent.prototype.getUsers = function () {
        var _this = this;
        this._sharedService.getUsers()
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ListComponent.prototype.deleteUser = function (event, user) {
        var _this = this;
        event.stopPropagation();
        this._sharedService.deleteUser(user)
            .subscribe(function (data) {
            _this.getUsers();
        });
    };
    ListComponent.prototype.addUser = function () {
        var _this = this;
        this._sharedService.addUser(this.newUserName, this.newUserSurname, this.newUserBirth)
            .subscribe(function (data) {
            _this.getUsers();
        });
        this.newUserName = '';
        this.newUserSurname = '';
        this.newUserBirth = null;
    };
    ListComponent.prototype.usersFilter = function () {
        var _this = this;
        this._sharedService.filterUser(this.filter_name, this.filter_surname, this.order_by)
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ListComponent.prototype.orderBy = function (order_by) {
        if (this.order_by == order_by) {
            this.order_by = '-' + order_by;
        }
        else {
            this.order_by = order_by;
        }
        this.usersFilter();
    };
    ListComponent.prototype.clearOrderBy = function () {
        this.order_by = '';
        this.usersFilter();
    };
    ListComponent.prototype.clearFilters = function () {
        this.filter_name = '';
        this.filter_surname = '';
        this.usersFilter();
    };
    ListComponent.prototype.exportData = function () {
        this._sharedService.exportXlsx()
            .subscribe(function (data) {
            saveAs(new Blob([data._body], { type: 'application/octet-stream' }), "export.xlsx");
        });
    };
    ListComponent.prototype.setUserId = function (id) {
        this._sharedService.setUserId(id);
    };
    ListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'users-list',
            templateUrl: 'list.component.html',
            styleUrls: ['list.component.css'],
        }), 
        __metadata('design:paramtypes', [shared_service_1.SharedService])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=list.component.js.map