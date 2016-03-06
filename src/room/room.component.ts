import {Component} from 'angular2/core';
import {CanActivate, Router} from 'angular2/router';
import {ChatCmp} from '../room/components/chat.component';
import {AuthRouteHelper} from '../services/auth/auth-route.helper';
import {AuthService} from '../services/auth/auth.service';

@Component({
	selector: 'room',
	templateUrl: 'room/room.template.html',
	styleUrls: ['room/room.style.css'],
	directives: [ChatCmp]
})

@CanActivate(() => AuthRouteHelper.requireAuth())

export class RoomCmp {

	constructor(private auth: AuthService, private router: Router) {}
}
