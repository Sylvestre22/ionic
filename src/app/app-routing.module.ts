import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
},
{
    path: 'home',
    loadChildren: () =>
        import('./pages/home/home.module').then(m => m.HomePageModule)
},
{
    path: 'login',
    loadChildren: () =>
        import('./pages/login/login.module').then(m => m.LoginPageModule)
},
{
    path: 'register',
    loadChildren: () =>
        import('./pages/register/register.module').then(m => m.RegisterPageModule)
},
{
    path: 'profil',
    loadChildren: () =>
        import('./pages/profil/profil.module').then(m => m.ProfilPageModule)
},
{
    path: 'search',
    loadChildren: () =>
        import('./pages/search/search.module').then(m => m.SearchPageModule)
},
{
    path: 'videos',
    loadChildren: () =>
        import('./pages/videos/videos.module').then(m => m.VideosPageModule)
},
{
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
},
{
    path: 'connexion-modal',
    loadChildren: () => import('./connexion-modal/connexion-modal.module').then(m => m.ConnexionModalPageModule)
},

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
