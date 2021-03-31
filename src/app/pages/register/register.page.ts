import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { AuthService } from '../../services/auth.service';
import { UserRegister } from '../../interfaces/user-register';


@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['../login/login.page.scss', './register.page.scss'],
})
export class RegisterPage implements OnInit {

    isErrorMail: boolean = true;
    isErrorPhone: boolean = true;
    user: UserRegister = { avatar: '', first_name: '', last_name: '', email: '', phone: '', password: '', confirm_password: '' };

    constructor(
        private router: Router,
        private camera: Camera,
        private auth: AuthService,
        private toast: ToastController,
        private loading: LoadingController
    ) {}

    ngOnInit() {}

    checkEmail() {
        const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
        this.isErrorMail = (regex.test(this.user.email.trim())) ? false : true;
    }

    checkPhone() {
        const regex = new RegExp(/^((\+)33|0|0033)[1-9](\d{2}){4}$/g);
        this.isErrorPhone = (regex.test(this.user.phone.trim())) ? false : true;
    }

    async register() {
        const load = await this.loading.create({
            message: 'Please wait...',
        });
        await load.present();
        this.user.username = this.user.email.split('@')[0];
        this.auth.register(this.user).then(async(data) => {
            console.log(data);
            await this.loading.dismiss();
            this.router.navigate(['/login']);
        }).catch(async(err) => {
            console.log(err);
            const toast = await this.toast.create({
                message: err,
                duration: 2000
            });
            toast.present();
            await this.loading.dismiss();
        })
    }

    uploadPicture() {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        }

        this.camera.getPicture(options).then((imageData) => {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            let base64Image = 'data:image/jpeg;base64,' + imageData;
            alert(imageData)
        }, (err) => {
            // Handle error
            alert(err)
        });
    }

}