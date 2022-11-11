import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../config.service';
import { Order } from '../config';
import { OrderDetailComponent } from '../order-detail/order-detail.component';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private configService : ConfigService) { }

  orders : Array<Order> | any;
  actual_order : Order | any;

  @ViewChild(OrderDetailComponent) child!: OrderDetailComponent;

  ngOnInit(): void {
    this.configService.getOrder().subscribe((o: Order) => this.orders = o) 
   }


  onClick(product: any){
    this.actual_order = product;
    if(this.child) this.child.open();
  }

}
