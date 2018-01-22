import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent} from './form/form.component';
import {WelcomeComponent} from './welcome/welcome.component';
import {UserDashComponent} from './user-dash/user-dash.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminDashComponent} from './admin-dash/admin-dash.component';
import {FinalComponent} from './final/final.component';

const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'form', component: FormComponent},
  {path: 'final', component: FinalComponent},
  {path: 'login', component: UserLoginComponent},
  {path: 'user-dash', component: UserDashComponent},
  {path: 'admin', component: AdminLoginComponent},
  {path: 'admin-dash', component: AdminDashComponent},
  {path: '*', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
