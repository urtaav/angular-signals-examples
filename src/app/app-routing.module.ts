import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFOundPageComponent } from './not-found-page/not-found-page.component';
import { WelcomeComponent } from './vehicles/welcome/welcome.component';
import { CartShellComponent } from './vehicles/cart/cart-shell/cart-shell.component';

const routes: Routes = [
  // {
  //   path: 'users',
  //   loadChildren: () => import('./users/users.module').then(m =>m.UsersModule),
  // },
  {
    path: 'products',
    loadChildren: () => import('./cart/cart.module').then(m => m.CartModule),
  },

  {
    path: 'users',
    children: [
      {
        path: '',
        loadComponent: () => import('./users/pages/users-page/users-page.component').then((c) => c.UsersPageComponent),
      },
      {
        path: 'list-signals',
        loadComponent: () => import('./users/pages/users-signal-page/users-signal-page.component').then((c) => c.UsersSignalPageComponent),
      }
    ],
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'vehicles',
    loadComponent:() => import('./vehicles/vehicles/vehicle-shell/vehicle-shell.component').then((c) => c.VehicleShellComponent),
  },
  {
    path:'cart',
    component:CartShellComponent
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component:NotFOundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }