import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ]
})
export class CommonSharedModule { }
