import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports:[
    MatButtonModule,
    MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
