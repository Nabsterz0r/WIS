import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from "./detail/detail.component";
import { ListComponent } from './list/list.component';
import { PhotoComponent } from './photo/photo.component';

const MAIN_ROUTES: Routes = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'detail', component: DetailComponent },
    { path: 'photo', component: PhotoComponent },
    { path: 'list', component: ListComponent },
];
export const CONST_ROUTING = RouterModule.forRoot(MAIN_ROUTES);