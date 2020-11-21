import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsDoctorPageRoutingModule } from './settings-doctor-routing.module';

import { SettingsDoctorPage } from './settings-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsDoctorPageRoutingModule
  ],
  declarations: [SettingsDoctorPage]
})
export class SettingsDoctorPageModule {}
