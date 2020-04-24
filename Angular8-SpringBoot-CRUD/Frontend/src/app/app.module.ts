import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { CareersComponent } from './careers/careers.component';
import { AwardsComponent } from './awards/awards.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { HeaderComponent } from './landing_pages/header/header.component';
import { FooterComponent } from './landing_pages/footer/footer.component';
import { AddUserComponent } from './user_management/add-user/add-user.component';
import { UpdateUserComponent } from './user_management/update-user/update-user.component';
import { UserListComponent } from './user_management/user-list/user-list.component';
import { UserDetailsComponent } from './user_management/user-details/user-details.component';
import { UserManagementComponent } from './user_management/user_management.component';
//import {AuthenticationService} from './services/authentication.service';
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    SignupComponent,
    LoginComponent,
    AboutusComponent,
    PageNotFoundComponent,
    HomeComponent,
    CareersComponent,
    AwardsComponent,
    TechnologiesComponent,
    ContactusComponent,
    SolutionsComponent,
    HeaderComponent,
    FooterComponent,
    AddUserComponent,
    UpdateUserComponent,
    UserListComponent,
    UserDetailsComponent,
    UserManagementComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
