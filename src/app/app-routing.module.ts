import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from '../product/product.component';
import { ProductDashboardComponent } from '../product/product-dashboard.component';
import { ProductInfoComponent } from '../product/product-info.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductComponent },
  { path: 'dashboard', component: ProductDashboardComponent },
  { path: 'info/:id', component: ProductInfoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }