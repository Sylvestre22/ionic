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
            path: 'homeJson',
            children: [{
                path: '',
                data: { json: true },
                loadChildren: '../home/home.module#HomePageModule'
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