import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';
import {RouterModule} from "@angular/router";
import {HomePage} from "../home/home.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
   ProfilPageRoutingModule
    // RouterModule.forChild([
    //   {
    //     path: '',
    //     component:ProfilPage
    //   }
    // ])
  ],
  declarations: [ProfilPage]
})
export class ProfilPageModule {}
//
