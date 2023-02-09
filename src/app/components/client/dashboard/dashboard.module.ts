import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { DashboardRoutes } from './dashboard.routing';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutes,
    CommonSharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
