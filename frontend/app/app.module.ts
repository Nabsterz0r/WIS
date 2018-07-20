import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { CONST_ROUTING } from './app.routing';
import { SharedService } from "./shared.service";
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    imports: [
        BrowserModule,
        CONST_ROUTING,
        HttpModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        ListComponent,
        DetailComponent,
        PhotoComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        {provide: APP_BASE_HREF, useValue : '/' },
        SharedService
    ]
})

export class AppModule {

}