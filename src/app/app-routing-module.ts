import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-module')
        .then(m => m.AuthModule)
  },
  {
    path: 'users',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/components/users/users-module')
        .then(m => m.UsersModule)
  },
  {
    path: 'roles',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./features/components/roles/roles-module')
        .then(m => m.RolesModule)
  },
  { path: '**', redirectTo: 'auth/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
