import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
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
export class OrderDetailComponent {


  @Input() order : any;
  view = true;

  close() { this.view = false }

  open() { this.view = true }

}
