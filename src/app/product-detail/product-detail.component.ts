import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  animations: [
    trigger('panelInOut', [
        transition('void => *', [
            style({transform: 'translateX(100%)'}),
            animate('800ms ease-out')
        ]),
        transition('* => void', [
            animate('300ms ease-in', style({transform: 'translateX(100%)'}))
        ]),
    ])
  ]
})
export class ProductDetailComponent {


  @Input() product : any;
  view = true;

  calcPrice(){
    return (this.product.price*(1-this.product.discountPercentage/100)).toFixed(2);
  }

  close() { this.view = false }

  open() { this.view = true }
}
