import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'entries',
    loadChildren: () =>
      import('./pages/entries/entries.module').then((m) => m.EntriesModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./pages/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'reports',
    loadChildren: () =>
      import('./pages/reports/reports.module').then((m) => m.ReportsModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./pages/users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'profiles',
    loadChildren: () =>
      import('./pages/profiles/profiles.module').then((m) => m.ProfilesModule),
  },
  {
    path: 'permitions',
    loadChildren: () =>
      import('./pages/permitions/permitions.module').then(
        (m) => m.PermitionsModule
      ),
  },
  {
    path: 'logs',
    loadChildren: () =>
      import('./pages/logs/logs.module').then((m) => m.LogsModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },

  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
