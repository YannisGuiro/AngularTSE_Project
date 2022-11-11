import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path : 'users', component : UsersComponent},
  { path : 'products', component : ProductsComponent, 
    children: [ { path : ':id', component : ProductsComponent }]},
  { path : 'orders', component : OrdersComponent},
  { path : 'form', component : ContactFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
