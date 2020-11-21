import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsDoctorPage } from './settings-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsDoctorPageRoutingModule {}
