import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrescribePage } from './prescribe.page';

const routes: Routes = [
  {
    path: '',
    component: PrescribePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrescribePageRoutingModule {}
