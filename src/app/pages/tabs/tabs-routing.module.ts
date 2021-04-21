import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [{
    path: '',
    component: TabsPage,
    children: [{
            path: 'home',
            children: [{
                path: '',
                data: { json: false },
                loadChildren: '../home/home.module#HomePageModule'
            }],
            data: { json: false },
        }, {
            path: 'cuisine',
            children: [{
                path: '',
                data: { json: true },
                loadChildren: '../home/home.module#HomePageModule'
            }],
            data: { json: true },
        },
      {
        path: 'video',
        children: [{
          path: '',
          data: { json: true },
          loadChildren: '../home/home.module#cuisine'
        }],
        data: { json: true },
      },
        {
            path: '',
            redirectTo: '/tabs/home',
            pathMatch: 'full'
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule {}
