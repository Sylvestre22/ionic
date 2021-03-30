import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';

import { AuthService } from '../../services/auth.service';
import { ForgotPasswordComponent } from '../../modals/forgot-password/forgot-password.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string = '';
    pass: string = '';

    isErrorMail: boolean = true;

    constructor(private modal: ModalController, private router: Router, private auth: AuthService, private loading: LoadingController) {}

    ngOnInit() {}



    async forgotPassword() {
        const modal = await this.modal.create({
            component: ForgotPasswordComponent,
        });
        return await modal.present();
    }

    checkEmail() {
        const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
        // this.isErrorMail = !regex.test(this.email);
        this.isErrorMail = (regex.test(this.email.trim())) ? false : true;
    }

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
                // await load.onDidDismiss();

            await this.loading.dismiss();
        })
    }

}