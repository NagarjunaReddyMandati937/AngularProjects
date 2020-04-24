import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserManagementComponent } from './user_management.component';
import { HttpClientModule } from '@angular/common/http';
import { UserManagementRoutingModule } from './user_management-routing.module';

@NgModule({
    declarations: [
        AddUserComponent,
        UpdateUserComponent,
        UserListComponent,
        UserDetailsComponent,
        UserManagementComponent,

    ],
    imports: [
        BrowserModule,
        UserManagementRoutingModule,
        FormsModule,
        ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
        HttpClientModule
    ],
    providers: [],
    bootstrap: [UserManagementComponent]})
export class UserManagementModule { }
