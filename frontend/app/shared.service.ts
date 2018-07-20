import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, ResponseContentType } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
 
@Injectable()
export class SharedService {
    usersListUrl: string = "http://localhost:8019/api/users_list/";
    imagesListUrl: string = "http://localhost:8019/api/images_list/";
    voteUrl: string = "http://localhost:8019/api/vote/";
    exportUrl: string = "http://localhost:8019/api/export/";
    userId: string;

    constructor(private _http: Http) { }

    getUsers() {
        return this._http.get(this.usersListUrl)
            .map(response => {
                return response.json()
            })
            .catch(error => Observable.throw(error.json()))
    }

    getUserById(id: string) {
        return this._http.get(this.usersListUrl + id)
            .map(response => {
                return response.json();
            })
            .catch(error => Observable.throw(error.json()));
    }

    updateLike(id: string) {
        let url = this.voteUrl + id;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(url, JSON.stringify({}), {headers: headers})
            .map(response => {
                return response.json()
            })
            .catch(error => Observable.throw(error.json()))
    }

    setUserId(id: string) {
        this.userId = id;
    }

    getImages() {
        return this._http.get(this.imagesListUrl)
            .map(response => {
                return response.json()
            })
            .catch(error => Observable.throw(error.json()))
    }

    getImagesById(id: string) {
        return this._http.get(this.imagesListUrl + '?user=' + id)
            .map(response => {
                return response.json()
            })
            .catch(error => Observable.throw(error.json()))
    }

    addUser(name: string, surname: string, birth: Date) {
        let age: number = new Date().getFullYear() - new Date(birth).getFullYear()
        const images: any = [];
        const body = {name: name, surname: surname, birth: birth, age: age, images: images}
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this.usersListUrl, JSON.stringify(body), {headers: headers})
            .map(response => {
                return response.json()
            })
            .catch(error => Observable.throw(error.json()))
    }

    deleteUser(user: any) {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.delete(this.usersListUrl, new RequestOptions({
            headers: headers,
            body: {id: user.id}
         }))
            .map(response => {
                console.log(response);
            })
            .catch(error => Observable.throw(error.json()))
    }

    filterUser(filter_name: string, filter_surname: string, order_by: string) {
        let url = this.getFilterUrl(filter_name, filter_surname, order_by)
        return this._http.get(url)
            .map(response => {
                return response.json()
            })
            .catch(error => Observable.throw(error.json()))

    }

    getFilterUrl(filter_name: string, filter_surname: string, order_by: string) {
        let url = this.usersListUrl + '?';
        if (filter_name) {
            url += 'name=' + filter_name + '&';
        }
        if (filter_surname) {
            url += 'surname=' + filter_surname + '&';
        }
        if (order_by) {
            url += 'order_by=' + order_by;
        } 
        return url
    }

    exportXlsx() {
        return this._http.get(this.exportUrl, {responseType: ResponseContentType.Blob})
            .map(response => {
                return response
            })
            .catch(error => Observable.throw(error.json()))
    }
}