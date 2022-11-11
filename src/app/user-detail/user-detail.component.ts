import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
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
export class UserDetailComponent {

  @Input() user : any;
  view = true;


  close() { this.view = false }

  open() { this.view = true }
}
