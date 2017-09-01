import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToldHandymanComponent }  from './told-handyman/told-handyman.component';
import { AdminHandymanComponent } from './admin-handyman/admin-handyman.component';
// import { LoginComponent }         from './login/login.component';
// import { RegisterComponent }      from './register/register.component';
// import { AuthService }            from './_guards/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: ToldHandymanComponent },
  { path: 'AdminHandyman', component: AdminHandymanComponent }
  // { path: 'AdminHandyman', component: LoginComponent },
  // { path: 'Register', component: RegisterComponent },
  // { path: 'login/AdminHandyman', component: AdminHandymanComponent, canActivate: [AuthService]  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
