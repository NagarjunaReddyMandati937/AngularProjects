import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CareersComponent } from './careers/careers.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { UserManagementComponent } from './user_management/user_management.component';
import { AddUserComponent } from './user_management/add-user/add-user.component';
import { UpdateUserComponent } from './user_management/update-user/update-user.component';
import { UserDetailsComponent } from './user_management/user-details/user-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'add', component: CreateEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
  { path: 'details/:id', component: EmployeeDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'home', component: HomeComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'solutions', component: SolutionsComponent },
  { path: 'user_management', component: UserManagementComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'user-update/:uid', component: UpdateUserComponent },
  { path: 'user-details/:uid', component: UserDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
