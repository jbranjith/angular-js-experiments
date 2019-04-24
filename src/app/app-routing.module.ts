import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { ProductComponent } from '../product/product.component';
import { ProductDashboardComponent } from '../product/dashboard/product-dashboard.component';
import { ProductInfoComponent } from '../product/info/product-info.component';
//import { ProductInfoModule } from '../product/info/product-info.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'dashboard', component: ProductDashboardComponent },
  { path: 'info/:id', loadChildren: '/product/info/product-info.module#ProductInfoModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }