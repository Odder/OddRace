import {Component} from 'angular2/core';
import {CanActivate, Router} from 'angular2/router';
import {AuthRouteHelper} from '../services/auth/auth-route.helper';
import {AuthService} from '../services/auth/auth.service';

@Component({
	selector: 'sign-in',
	templateUrl: 'sign-in/sign-in.template.html'
})

@CanActivate(() => AuthRouteHelper.requireUnauth())

export class SignInCmp {
	constructor(private auth: AuthService, private router: Router) {}

	signInWithGithub(): void {
		this.auth.signInWithGithub()
			.then(() => this.postSignIn());
	}

	private postSignIn(): void {
		this.router.navigate(['/Race']);
	}
}
