import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url: string = 'http://cda.eu-4.evennode.com/api'; // aaaaaaa@aaaaaaa.fr

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return new Promise((resolve, rejects) => {
            this.http.post(this.url + '/login', { email: email, password: password }).subscribe((data: any) => {
                if (!data.success)
                    rejects(false)
                resolve(data)
            })
        })
    }

    getProfile() {
        return this.http.get(this.url + '/profil');
    }
}