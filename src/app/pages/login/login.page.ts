import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string = '';
    pass: string = '';

    constructor(private router: Router, private auth: AuthService, private loading: LoadingController) {}

    ngOnInit() {}

    async loginForm() {
        const load = await this.loading.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
        });
        // await load.present();
        console.log(this.email);
        console.log(this.pass);
        this.auth.getProfile().subscribe(async(user) => {
            console.log(user);
            this.router.navigate(['/home'])
            await load.onDidDismiss();
        })
    }

}