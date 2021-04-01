import { Component, Input, OnInit } from '@angular/core';


import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['../../pages/login/login.page.scss', './forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {

    @Input() emailer: string;

    constructor(private modal: ModalController) {}

    ngOnInit() {
        console.log(this.emailer);
    }

    close() {
        this.modal.dismiss({
            'dismissed': true
        });
    }

}