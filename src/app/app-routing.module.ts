import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'partner_test.html', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'auth-successful',
    loadChildren: () => import('./auth-successful/auth-successful.module').then( m => m.AuthSuccessfulPageModule)
  },
  {
    path: 'auth-fail',
    loadChildren: () => import('./auth-fail/auth-fail.module').then( m => m.AuthFailPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
