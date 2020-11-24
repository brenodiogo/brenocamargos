import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresencaPage } from './presenca.page';

const routes: Routes = [
  {
    path: '',
    component: PresencaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresencaPageRoutingModule {}
