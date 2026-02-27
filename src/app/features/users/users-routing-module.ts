import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserForm } from './pages/user-form/user-form';
import { UserList } from './pages/user-list/user-list';

const routes: Routes = [
   { path: '', component: UserList },
  { path: 'create', component: UserForm }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
