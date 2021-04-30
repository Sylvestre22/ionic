import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

//import { ConnexionModalPageRoutingModule } from './connexion-modal-routing.module';

import { ConnexionModalPage } from './connexion-modal.page';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   // ConnexionModalPageRoutingModule
    RouterModule.forChild([
      {
        path: '',
        component:ConnexionModalPage
      }
    ])
  ],
  declarations: [ConnexionModalPage]
})
export class ConnexionModalPageModule {}
