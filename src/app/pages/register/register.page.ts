import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

interface userRegister {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    password: string;
    repassword: string;
}

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['../login/login.page.scss', './register.page.scss'],
})
export class RegisterPage implements OnInit {

    isErrorMail: boolean = true;
    isErrorPhone: boolean = true;
    user: userRegister = { firstname: '', lastname: '', email: '', phone: '', password: '', repassword: '' };

    constructor(private camera: Camera) {}

    ngOnInit() {}

    checkEmail() {
        const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
        this.isErrorMail = (regex.test(this.user.email.trim())) ? false : true;
    }

    checkPhone() {
        const regex = new RegExp(/^((\+)33|0|0033)[1-9](\d{2}){4}$/g);
        this.isErrorPhone = (regex.test(this.user.phone.trim())) ? false : true;
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