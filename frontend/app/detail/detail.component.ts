import { Component } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
    moduleId: module.id,
    selector: 'detail',
    templateUrl: 'detail.component.html',
    styleUrls: ['detail.component.css'],
})

export class DetailComponent {
    title = 'detail';

    userId: string = '';
    user = {};

    images_id: number[];
    images: any = [];
    
    constructor(private _sharedService: SharedService) {
        this.userId = _sharedService.userId;
        this.getUserData();
        this.getUsersPhoto(this.userId);
    }

    getUserData() {
        this._sharedService.getUserById(this.userId)
        .subscribe(data => {
            this.user = data;
            // this.images_id = data.images;
        })
    }

    getUsersPhoto(userId: string) {
        this._sharedService.getImagesById(this.userId)
            .subscribe(data => {
                // for (const item in data) {
                //     let index = this.images_id.indexOf(data[item].id)
                //     if (index > -1 ) {
                //         this.images.push(data[item])
                //     }
                //     debugger;
                // }
                this.images = data;
            })
    }

    vote(id: string) {
        this._sharedService.updateLike(id)
            .subscribe(data => {
                debugger;
                let photo = this.images.find( (elem: any, index: any) => {
                   return elem.id == data.id ? true : false
                })
                photo.like = data.likes
            })
    }
}