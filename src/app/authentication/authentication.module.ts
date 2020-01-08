import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from './service/authentication.service';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthenticationRoutes)

  ],
  providers:[AuthenticationService],
  exports:[]
})
export class AuthenticationModule { }
