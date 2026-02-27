import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleForm } from './pages/role-form/role-form';
import { RoleList } from './pages/role-list/role-list';

const routes: Routes = [
  { path: '', component: RoleList },
  { path: 'create', component: RoleForm }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
