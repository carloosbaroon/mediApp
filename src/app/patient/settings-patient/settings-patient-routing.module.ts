import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsPatientPage } from './settings-patient.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsPatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsPatientPageRoutingModule {}
