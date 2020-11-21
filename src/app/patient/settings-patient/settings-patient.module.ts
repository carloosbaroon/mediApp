import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SettingsPatientPageRoutingModule } from './settings-patient-routing.module';

import { SettingsPatientPage } from './settings-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SettingsPatientPageRoutingModule
  ],
  declarations: [SettingsPatientPage]
})
export class SettingsPatientPageModule {}
