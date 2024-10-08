import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DealsPageRoutingModule } from './deals-routing.module'; // Asegúrate de que este archivo exista

import { DealsPage } from './deals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DealsPageRoutingModule // Importa el módulo de rutas para el componente
  ],
  declarations: [DealsPage] // Declara el componente DealsPage
})
export class DealsPageModule {}
