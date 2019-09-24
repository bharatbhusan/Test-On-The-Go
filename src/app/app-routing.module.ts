import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogonComponent } from './logon/logon.component'
import { DashboardComponent } from './dashboard/dashboard.component'

const routes: Routes = [
  // { path: '', redirectTo: '/logon', pathMatch: 'full' },
  // { path: 'logon', component: LogonComponent },

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
