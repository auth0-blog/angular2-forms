# Angular 2 Forms Demo

This repo goes along with Auth0's [Angular 2 Forms tutorial](https://auth0.com/blog/2016/05/03/angular2-series-forms-and-custom-validation/). It provides some examples of how to work with forms in Angular 2, from simple to complex.

## Running the Server

The Angular 2 demo in this repo relies on a Node server which comes from another repo. To install the server, run:

```bash
git submodule update --init
```

After the server is cloned, install its dependencies and run it:

```bash
cd server
npm install
node sever.js
```

**Note:** You will need to have MongoDB installed to work with the server.

## Running the Demos

The Angular 2 demo uses the [angular-cli](https://github.com/angular/angular-cli). Make sure you have angular-cli installed and use it to serve the app.

```bash
npm install -g angular-cli
cd client
ng server
```

The app will be served at `localhost:4200`.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a Free Auth0 Account

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.