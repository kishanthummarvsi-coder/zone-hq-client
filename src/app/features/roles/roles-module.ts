import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing-module';
import { RoleList } from './pages/role-list/role-list';
import { RoleForm } from './pages/role-form/role-form';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared-module';


@NgModule({
  declarations: [
    RoleList,
    RoleForm
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RolesRoutingModule,
    SharedModule
  ]
})
export class RolesModule { }
