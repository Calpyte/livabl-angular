import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
       {
        path:'measure',
        loadChildren: () => import('./measure/measure.module').then(m => m.MeasureModule)
       },
       {
        path:'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
       },
       {
        path:'',
        redirectTo:'measure',
        pathMatch:'full'
       }
];

export const ClientRoutes = RouterModule.forChild(routes);
