import {Component, OnInit} from 'angular2/core';
import {FirebaseChatService} from '../../services/chat.service';

@Component({
	selector: 'chat',
	templateUrl: 'room/components/chat.template.html',
	styleUrls: ['room/components/chat.style.css']
})

export class ChatCmp implements OnInit {
	public Messages;
	public roomId = 1;
	public message;

	constructor(private chatService:FirebaseChatService) {
		this.message='okay?';
	}

	clear(): void {
		this.message = '';
	}

	sendMessage(): void {
		const message: string = this.message.trim();
		if (message.length) {
			this.chatService.sendMessage(
				message,
				1,
				1
			);
		}
		this.clear();
	}

	getChat() {
		this.Messages = this.chatService.getMessages( this.roomId );
	}

	ngOnInit():any {
		this.getChat();
	}
}
