import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InformationComponent } from './components/information/information.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'components/information', component: InformationComponent },
  { path: 'components/resetpassword', component: ResetpasswordComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
