import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeoleafletPageRoutingModule } from './geoleaflet-routing.module';

import { GeoleafletPage } from './geoleaflet.page';

import { MisComponentesModule } from './../../components/mis-componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeoleafletPageRoutingModule,
    MisComponentesModule
  ],
  declarations: [GeoleafletPage]
})
export class GeoleafletPageModule {}
