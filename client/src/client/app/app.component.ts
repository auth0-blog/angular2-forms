import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {ValidatedFormComponent} from './validated-form/validated-form.component';
import {CustomValidatedFormComponent} from './custom-validated-form/custom-validated-form.component';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  moduleId: __moduleName,
  selector: 'app',
  providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  pipes: []
})
@RouteConfig([
  { path: '/simple-form', name: "SimpleForm", component: SimpleFormComponent, useAsDefault: true },
  { path: '/validated-form', name: "ValidatedForm", component: ValidatedFormComponent },
  { path: '/custom-validated-form', name: "CustomValidatedForm", component: CustomValidatedFormComponent }
])
export class App {}
