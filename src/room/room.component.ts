import {Component} from 'angular2/core';
import {ChatCmp} from '../room/components/chat.component';

@Component({
	selector: 'room',
	templateUrl: 'room/room.template.html',
	styleUrls: ['room/room.style.css'],
	directives: [ChatCmp]
})

export class RoomCmp {

}
