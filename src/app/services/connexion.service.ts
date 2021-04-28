import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Connexion } from '../interfaces/connexion-register';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {
  private url = 'https://exoticafrica.fr/app.php'; // aaaaaaa@aaaaaaa.fr



  constructor(private http: HttpClient) {}
  register(con: Connexion) {
    return new Promise((resolve, rejects) => {
      this.http.post(this.url, con).subscribe((data: any) => {
        (!data.success) ? rejects(data.message): resolve(data);
      });
    });
  }
  getAll(){
    return this.http.get<[Connexion]>(this.url);

  }
  get(id: string){
  return this.http.get<[Connexion]>(this.url + '/' + id);
  }

  create(connexion: Connexion){
    return this.http.post(this.url, connexion);

  }
  update(connexion: Connexion, id: string){
    return this.http.put(this.url + '/' + id, connexion);


  }
  remove(id: string){
    return this.http.delete(this.url + '/' + id);

  }


}
