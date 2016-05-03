import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';
import {Http} from 'angular2/http';
import {CREATE_USER_ENDPOINT} from '../shared/api';

@Component({
  moduleId: __moduleName,
  selector: 'validated-form',
  templateUrl: 'validated-form.component.html',
  styleUrls: ['validated-form.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class ValidatedFormComponent {

  registrationForm: ControlGroup;
  username: Control;
  email: Control;
  password: Control;
  submitAttempt: boolean = false;

  constructor(private http: Http, private builder: FormBuilder) {

    this.username = new Control('', Validators.required)
    this.email = new Control('', Validators.required)
    this.password = new Control('', Validators.compose([Validators.required, Validators.minLength(8)]));

    this.registrationForm = builder.group({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }

  registerUser(user) {
    this.submitAttempt = true;
    if (this.registrationForm.valid) {
      let data = JSON.stringify(user);
      this.http.post(CREATE_USER_ENDPOINT, data)
        .subscribe(
          data => alert('Your account has been created!'),
          error => alert(error.json().message)
        );
    }
  }

}
