import {Component, ViewEncapsulation} from 'angular2/core';
import {
    RouteConfig,
    ROUTER_DIRECTIVES
} from 'angular2/router';

// Auth services
import {AuthRouteHelper} from '../services/auth/auth-route.helper';
import {AuthService} from '../services/auth/auth.service';

// App Components
import {RoomCmp} from '../room/room.component';
import {SignInCmp} from '../sign-in/sign-in.component';

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
    { path: '/race', component: RoomCmp,  as: 'Race' },
    { path: '/login', component: SignInCmp, as: 'SignIn' }
])

export class AppCmp {
	authenticated: boolean = false;

	constructor(private auth:AuthService, routeHelper:AuthRouteHelper) {
		auth.subscribe((authenticated: boolean) => {
			this.authenticated = authenticated;
		});
	}
}
