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
var http_1 = require("@angular/http");
require('rxjs/Rx');
var Observable_1 = require("rxjs/Observable");
var SharedService = (function () {
    function SharedService(_http) {
        this._http = _http;
        this.usersListUrl = "http://localhost:8019/api/users_list/";
        this.imagesListUrl = "http://localhost:8019/api/images_list/";
        this.voteUrl = "http://localhost:8019/api/vote/";
        this.exportUrl = "http://localhost:8019/api/export/";
    }
    SharedService.prototype.getUsers = function () {
        return this._http.get(this.usersListUrl)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.getUserById = function (id) {
        return this._http.get(this.usersListUrl + id)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.updateLike = function (id) {
        var url = this.voteUrl + id;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(url, JSON.stringify({}), { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.setUserId = function (id) {
        this.userId = id;
    };
    SharedService.prototype.getImages = function () {
        return this._http.get(this.imagesListUrl)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.getImagesById = function (id) {
        return this._http.get(this.imagesListUrl + '?user=' + id)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.addUser = function (name, surname, birth) {
        var age = new Date().getFullYear() - new Date(birth).getFullYear();
        var images = [];
        var body = { name: name, surname: surname, birth: birth, age: age, images: images };
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.usersListUrl, JSON.stringify(body), { headers: headers })
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.deleteUser = function (user) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.delete(this.usersListUrl, new http_1.RequestOptions({
            headers: headers,
            body: { id: user.id }
        }))
            .map(function (response) {
            console.log(response);
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.filterUser = function (filter_name, filter_surname, order_by) {
        var url = this.getFilterUrl(filter_name, filter_surname, order_by);
        return this._http.get(url)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService.prototype.getFilterUrl = function (filter_name, filter_surname, order_by) {
        var url = this.usersListUrl + '?';
        if (filter_name) {
            url += 'name=' + filter_name + '&';
        }
        if (filter_surname) {
            url += 'surname=' + filter_surname + '&';
        }
        if (order_by) {
            url += 'order_by=' + order_by;
        }
        return url;
    };
    SharedService.prototype.exportXlsx = function () {
        return this._http.get(this.exportUrl, { responseType: http_1.ResponseContentType.Blob })
            .map(function (response) {
            return response;
        })
            .catch(function (error) { return Observable_1.Observable.throw(error.json()); });
    };
    SharedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SharedService);
    return SharedService;
}());
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map