import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing-module';
import { UserList } from './pages/user-list/user-list';
import { UserForm } from './pages/user-form/user-form';
import { SharedModule } from '../../../shared/shared-module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserList,
    UserForm
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
