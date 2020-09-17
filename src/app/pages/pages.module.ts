import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [HomeComponent, NotfoundComponent, MapComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
