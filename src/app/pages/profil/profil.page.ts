
import {ConnexionService } from "../../services/connexion.service";
import { Component, OnInit } from '@angular/core';
import { Connexion } from '../../interfaces/connexion-register';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {
connexions: [Connexion];
  constructor(private  service: ConnexionService) { }

  ngOnInit() {
    this.service.getAll().subscribe(response =>{
      this.connexions = response;
    });
  }

}
