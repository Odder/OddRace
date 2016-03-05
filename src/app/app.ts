import {Component, ViewEncapsulation} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';

import {RoomCmp} from '../room/room.component';

@Component({
    selector: 'app',
    moduleId: module.id,
    //viewProviders: [FirebaseChatService],
    templateUrl: './app.html',
    styleUrls: ['./app.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/race', component: RoomCmp,  as: 'Race' }
])
export class AppCmp {}
