import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { User } from '../config';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private configService : ConfigService) { }

  users : Array<User> | any;
  actual_user : User | any;

  @ViewChild(UserDetailComponent) child!: UserDetailComponent;

  ngOnInit(): void {
    this.configService.getUser().subscribe((u: User) => this.users = u) 
  }


  onClick(user: any){
    this.actual_user = user;
    if(this.child) this.child.open();
  }

}
