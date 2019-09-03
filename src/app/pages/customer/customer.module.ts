import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { MaincustomerComponent } from './maincustomer/maincustomer.component';
import { SubcustomerComponent } from './subcustomer/subcustomer.component';



@NgModule({
  declarations: [CustomerListComponent, MaincustomerComponent, SubcustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
