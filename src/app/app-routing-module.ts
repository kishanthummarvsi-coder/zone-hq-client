import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: 'users',
    loadChildren: () =>
      import('./features/users/users-module')
        .then(m => m.UsersModule)
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('./features/roles/roles-module')
        .then(m => m.RolesModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
