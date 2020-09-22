import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modulos do MATERIAL
import { MatButtonModule } from '@angular/material/button';

import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [HomeComponent, NotfoundComponent, MapComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class PagesModule { }
