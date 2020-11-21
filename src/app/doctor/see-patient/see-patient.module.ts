import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeePatientPageRoutingModule } from './see-patient-routing.module';

import { SeePatientPage } from './see-patient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeePatientPageRoutingModule
  ],
  declarations: [SeePatientPage]
})
export class SeePatientPageModule {}
