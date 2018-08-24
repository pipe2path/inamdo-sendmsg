import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [UsersService]
})
export class HomeComponent implements OnInit {

  public isCollapsed = true;
  public users;
  public oneAtATime = true;
  constructor(private usersService: UsersService) { }
  msg = 'You have earned 6 free wings! Order with this code: ';

  ngOnInit() {
    // this.getUsersMock();
    this.getCouponListWeb();
    }

  message = 'dfafaaddaf';
  code = '8458';

  getCouponListMock(): void {
    this.usersService.getCouponListMock()
      .subscribe(users => this.users = users);
  }

  getCouponListWeb(): void {
    this.usersService.getCouponList(1)
      .subscribe(
        data => { this.users = this.updateUserMessage(data); },
        err => console.error(err),
        () => console.log('done loading questions'));
  }

  updateUserMessage(data): void {
    for ( let i = 0; i < data.length; i++) {
      data[i].message = this.msg + data[i].code;
    }
    return data;
  }
