import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomePage } from './welcome.page';


const routes: Routes = [
  {
    path: '',
    component: WelcomePage,
    children: [
      {
        path: 'Register',
        redirectTo: './register/register.module#PageModule'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WelcomePageRoutingModule {}
