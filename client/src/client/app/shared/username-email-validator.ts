import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Injector} from 'angular2/core'
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';
import {CHECK_USER_ENDPOINT} from './api';

interface IUsernameEmailValidator {
  [key:string]: boolean
}

function checkUser(control: Control, source: string) : Observable<IUsernameEmailValidator> {
  
  // Manually inject Http
  let injector = Injector.resolveAndCreate([HTTP_PROVIDERS]);
  let http = injector.get(Http);
  
  // Return an observable with null if the
  // username or email doesn't yet exist, or
  // an objet with the rejetion reason if they do
  return new Observable((obs: any) => {
    control
      .valueChanges
      .debounceTime(400)
      .flatMap(value => http.post(CHECK_USER_ENDPOINT, JSON.stringify({ [source]: value })))
      .subscribe(
        data => {
          obs.next(null);
          obs.complete();
        },
        error => {
          let message = error.json().message;
          let reason;
          if (message === 'Username taken') {
            reason = 'usernameTaken';
          }
          if (message === 'Email taken') {
            reason = 'emailTaken';
          }
          obs.next({ [reason]: true });
          obs.complete();
        }
    );
  });
}

export class UsernameEmailValidator {

  constructor() {}

  static checkUsername(control: Control) {
    return checkUser(control, 'username');
  }
  
  static checkEmail(control: Control) {
    return checkUser(control, 'email');
  }
}