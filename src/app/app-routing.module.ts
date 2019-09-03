import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "customers",
    loadChildren: "./pages/customer/customer.module#CustomerModule"
  },
  {
    path: "orders",
    loadChildren: "./pages/orders/orders.module#OrdersModule"
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
