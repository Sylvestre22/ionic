import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { UserRegister } from '../interfaces/user-register';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url: string = 'https://exoticafrica.fr/app.php'; // aaaaaaa@aaaaaaa.fr

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return new Promise((resolve, rejects) => {
            this.http.post(this.url + '/?id=', { email: email, password: password }).subscribe((data: any) => {
                (!data.success) ? rejects(false): resolve(data);
            });
        });
    }

    register(user: UserRegister) {
        return new Promise((resolve, rejects) => {
            this.http.post(this.url + '/', user).subscribe((data: any) => {
                (!data.success) ? rejects(data.message): resolve(data);
            });
        });
    }

    getProfile() {
        return this.http.get(this.url + '/');
    }
}
