import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeePatientPage } from './see-patient.page';

const routes: Routes = [
  {
    path: '',
    component: SeePatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeePatientPageRoutingModule {}
