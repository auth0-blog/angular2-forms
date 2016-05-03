import {Component} from 'angular2/core';
import {FormBuilder, Validators, Control, ControlGroup, FORM_DIRECTIVES} from 'angular2/common';
import {Http} from 'angular2/http';
import {CREATE_USER_ENDPOINT} from '../shared/api';
import {UsernameEmailValidator} from '../shared/username-email-validator';

@Component({
  moduleId: __moduleName,
  selector: 'custom-validated-form',
  templateUrl: 'custom-validated-form.component.html',
  styleUrls: ['custom-validated-form.component.css'],
  directives: [FORM_DIRECTIVES]
})
export class CustomValidatedFormComponent {

  registrationForm: ControlGroup;
  username: Control;
  email: Control;
  password: Control;
  submitAttempt: boolean = false;
  
  constructor(private builder: FormBuilder, private http: Http) {
    
    this.username = new Control('', Validators.required, UsernameEmailValidator.checkUsername);
    this.email = new Control('', Validators.required, UsernameEmailValidator.checkEmail);
    this.password = new Control('', Validators.required);

    this.registrationForm = builder.group({
      username: this.username,
      email: this.email,
      password: this.password
    });
  }
  
  registerUser(user) {
    let data = JSON.stringify(user);
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
