import 'zone.js/dist/zone.js';
import 'reflect-metadata';
import {TopComponent} from './top.component';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {CLIENT_ROUTER_PROVIDERS} from './bootstrap.routes';
import {HTTP_PROVIDERS} from '@angular/http';
import {NG2_UI_AUTH_PROVIDERS} from 'ng2-ui-auth';
import {provideForms, disableDeprecatedForms} from '@angular/forms';
/**
 * Created by ronze on 2/16/2016.
 */
const GOOGLE_CLIENT_ID = '42336139102-miq5996p1jh245j06ak9r6t43hfd0cc9.apps.googleusercontent.com';

bootstrap(TopComponent, [
    disableDeprecatedForms(),
    provideForms(),
    CLIENT_ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    NG2_UI_AUTH_PROVIDERS({providers: {
        google: {clientId: GOOGLE_CLIENT_ID},
        twitter: {
            authorizationEndpoint: 'https://api.twitter.com/oauth/authorize' //you don't need to override if you don't want 3 legged authentication
        }
    }}),
]);