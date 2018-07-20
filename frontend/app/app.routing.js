"use strict";
var router_1 = require('@angular/router');
var detail_component_1 = require("./detail/detail.component");
var list_component_1 = require('./list/list.component');
var photo_component_1 = require('./photo/photo.component');
var MAIN_ROUTES = [
    { path: '', redirectTo: '/list', pathMatch: 'full' },
    { path: 'detail', component: detail_component_1.DetailComponent },
    { path: 'photo', component: photo_component_1.PhotoComponent },
    { path: 'list', component: list_component_1.ListComponent },
];
exports.CONST_ROUTING = router_1.RouterModule.forRoot(MAIN_ROUTES);
//# sourceMappingURL=app.routing.js.map