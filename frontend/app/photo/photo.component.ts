import { Component } from '@angular/core';
import { SharedService } from "./../shared.service";

@Component({
    moduleId: module.id,
    selector: 'photo',
    templateUrl: 'photo.component.html',
    styleUrls: ['photo.component.css'],
})

export class PhotoComponent {
    images: any = [];

    constructor(private _sharedService: SharedService) {
        this.getImages();
    }

    getImages() {
        this._sharedService.getImages()
            .subscribe(data => {
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