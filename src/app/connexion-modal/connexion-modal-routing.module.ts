import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConnexionModalPage } from './connexion-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ConnexionModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionModalPageRoutingModule {}
