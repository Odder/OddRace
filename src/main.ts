import {provide, enableProdMode} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF} from 'angular2/router';

import {AppCmp} from './app/app';

import {FirebaseService} from 'firebase-angular2/core';
import {FirebaseChatService} from './services/chat.service';
import {AUTH_PROVIDERS} from './services/auth/providers';

if ('<%= ENV %>' === 'prod') { enableProdMode(); }

declare var Firebase;

bootstrap(AppCmp, [
    ROUTER_PROVIDERS,
    AUTH_PROVIDERS,
    provide(APP_BASE_HREF, { useValue: '<%= APP_BASE %>' }),
    provide(
        FirebaseChatService,
        {
            useFactory: () => new FirebaseChatService(
                new FirebaseService(
                    new Firebase('https://cuberace.firebaseio.com')
                )
            )
        }
    )
]);

// In order to start the Service Worker located at "./sw.js"
// uncomment this line. More about Service Workers here
// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
// if ('serviceWorker' in navigator) {
//   (<any>navigator).serviceWorker.register('./sw.js').then(function(registration) {
//     console.log('ServiceWorker registration successful with scope: ',    registration.scope);
//   }).catch(function(err) {
//     console.log('ServiceWorker registration failed: ', err);
//   });
// }
