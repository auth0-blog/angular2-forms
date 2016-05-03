import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';
import {CREATE_USER_ENDPOINT} from '../shared/api';

@Component({
  moduleId: __moduleName,
  selector: 'simple-form',
  templateUrl: 'simple-form.component.html',
  styleUrls: ['simple-form.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class SimpleFormComponent {
  
  constructor(private http: Http) {}
  
  registerUser(user) {
    let data = JSON.stringify(user);
    this.http.post(CREATE_USER_ENDPOINT, data)
      .subscribe(
        data => alert('Your account has been created!'),
        error => alert(error.json().message)
      );
  }
  
}
