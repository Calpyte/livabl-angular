import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonSharedModule } from 'src/app/common-shared/common-shared.module';
import { ClientRoutes } from './client.routing';

@NgModule({
  imports: [
    CommonModule,
    CommonSharedModule,
    ClientRoutes
  ],
  declarations: []
})
export class ClientModule { }
