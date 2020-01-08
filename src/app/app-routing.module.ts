import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';


const appRoutes: Routes = [
  {path:'',redirectTo:'/auth/login',pathMatch:'full'},
  { path: 'auth', loadChildren: () => import(`./authentication/authentication.module`).then(m => m.AuthenticationModule) },
  { path: 'task', loadChildren: () => import(`./task/task.module`).then(m => m.TaskModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
