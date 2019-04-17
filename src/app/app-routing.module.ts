import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ProductDashboardComponent },
  { path: 'info/:id', component: ProductInfoComponent },
  { path: 'heroes', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }