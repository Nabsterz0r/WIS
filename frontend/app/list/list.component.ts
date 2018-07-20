import { Component } from '@angular/core';
import { SharedService } from "./../shared.service";
import 'file-saver';

@Component({
    moduleId: module.id,
    selector: 'users-list',
    templateUrl: 'list.component.html',
    styleUrls: ['list.component.css'],
})

export class ListComponent {
    title = 'Usasdasdadss db';

    users: any = [];
    userId: number;
    newUserName: string = '';
    newUserSurname: string = '';
    newUserBirth: Date;

    order_by: string = '';
    filter: string = '';
    filter_name: string = '';
    filter_surname: string = '';

    constructor(private _sharedService: SharedService) {
        this.getUsers()
    }

    getUsers(){
        this._sharedService.getUsers()
            .subscribe(data => {
                this.users = data;
            })
    }

    deleteUser(event: Event, user: any) {
        event.stopPropagation();
        this._sharedService.deleteUser(user)
            .subscribe(data => {
                this.getUsers();
            })
    }

    addUser() {
        this._sharedService.addUser(this.newUserName, this.newUserSurname, this.newUserBirth)
            .subscribe(data => {
                this.getUsers();
            })

        this.newUserName = '';
        this.newUserSurname = '';
        this.newUserBirth = null;
    }

    usersFilter() {
        this._sharedService.filterUser(this.filter_name, this.filter_surname, this.order_by)
            .subscribe(data => {
                this.users = data;
            })
    }

    orderBy(order_by: string) {
        if (this.order_by == order_by) {
            this.order_by = '-' + order_by;
        } else {
            this.order_by = order_by;
        }
        this.usersFilter()
    }

    clearOrderBy() {
        this.order_by = '';
        this.usersFilter();
    }

    clearFilters() {
        this.filter_name = '';
        this.filter_surname = '';
        this.usersFilter();
    }

    exportData() {
        this._sharedService.exportXlsx()
            .subscribe(data => {
                saveAs(new Blob([data._body], {type: 'application/octet-stream'}), "export.xlsx");
            })
    }

    setUserId(id: string) {
        this._sharedService.setUserId(id);
    }
}