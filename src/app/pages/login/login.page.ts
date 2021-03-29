import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string = '';
    pass: string = '';

    constructor() {}

    ngOnInit() {}

    loginForm() {
        console.log(this.email);
        console.log(this.pass);
    }

}