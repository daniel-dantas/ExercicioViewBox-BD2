import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { SvgComponent } from './svg/svg.component';

@NgModule({
  declarations: [AutocompleteComponent, SvgComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    AutocompleteComponent,
    SvgComponent
  ]
})
export class ComponentsModule { }
