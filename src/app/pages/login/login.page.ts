import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string = '';
    pass: string = '';

    constructor(private auth: AuthService) {}

    ngOnInit() {}

    loginForm() {
        console.log(this.email);
        console.log(this.pass);
        this.auth.getProfile().subscribe(data => {
            console.log(data);
        })
    }

}