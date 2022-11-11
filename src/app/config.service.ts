import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, User, Order } from './config';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  productUrl = 'assets/product_list.json';
  userUrl = 'assets/user_list.json';
  orderUrl = 'assets/order_list.json';


  getProduct() : Observable<Product> {
    return this.http.get<Product>(this.productUrl);
  }

  getUser() : Observable<User> {
    return this.http.get<User>(this.userUrl);
  }

  getOrder() : Observable<Order> {
    return this.http.get<Order>(this.orderUrl);
  }
}
