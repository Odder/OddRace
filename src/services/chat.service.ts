import {Injectable} from 'angular2/core';
import {FirebaseService} from 'firebase-angular2/core';

@Injectable()

export class FirebaseChatService {

	private chat: FirebaseService;

	constructor(firebaseService:FirebaseService) {

		this.chat = firebaseService.child('ChatMessages');
	}

	getMessages(roomId) {
		var service = this.chat;
		roomId = 1;
		console.log('am I here?');

		return service.value.map((messages) => {
			var messagesArray = [];
			console.log(messages, messages[roomId]);
			for (var i in messages[roomId]) {
				messagesArray.push(messages[roomId][i]);
			};
			return messagesArray.reverse();
		});
	}

	sendMessage(message, roomId, UserId) {
		var service = this.chat;

		return service.child(roomId).push({
			User: 'Odder',
			Timestamp: '1234223',
			Message: message
		});
	}
}
