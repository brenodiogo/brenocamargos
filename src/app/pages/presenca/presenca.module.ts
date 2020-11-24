import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresencaPageRoutingModule } from './presenca-routing.module';

import { PresencaPage } from './presenca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresencaPageRoutingModule
  ],
  declarations: [PresencaPage]
})
export class PresencaPageModule {}
