import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CustomerListComponent} from './customer-list/customer-list.component'
import { MaincustomerComponent } from './maincustomer/maincustomer.component';
import { SubcustomerComponent } from './subcustomer/subcustomer.component';


const routes: Routes = [
    {
        path:'',
        component:CustomerListComponent,
        children:[{
            path:'main',
            component:MaincustomerComponent,
            pathMatch:'full'
        },
        {
            path:'sub',
            component:SubcustomerComponent,
            pathMatch:'full'
        }]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }