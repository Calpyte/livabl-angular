import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasureRoutes } from './measure.routing';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { MeasureComponent } from './measure.component';

@NgModule({
  imports: [
    CommonModule,
    MeasureRoutes,
    CommonSharedModule
  ],
  declarations: [MeasureComponent]
})
export class MeasureModule { }
