import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfigService } from '../config.service';
import { Product } from '../config';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {

  constructor(private configService : ConfigService) { }

  products : Array<Product> | any;
  actual_product : Product | any;

  @ViewChild(ProductDetailComponent) child!: ProductDetailComponent;

  ngOnInit(): void {
    this.configService.getProduct().subscribe((p: Product) => this.products = p) 
   }


  onClick(product: any){
    this.actual_product = product;
    if(this.child) this.child.open();
  }
}
