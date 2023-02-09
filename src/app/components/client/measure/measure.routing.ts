import { Routes, RouterModule } from '@angular/router';
import { MeasureComponent } from './measure.component';

const routes: Routes = [
  { path:'',component:MeasureComponent},
];

export const MeasureRoutes = RouterModule.forChild(routes);
