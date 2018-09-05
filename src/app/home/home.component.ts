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

  constructor(private usersService: UsersService) {
  }

  msg = 'You have earned 6 free wings. Enjoy!';

  ngOnInit() {
    // this.getUsersMock();
    this.getCouponListWeb();
  }

  getCouponListMock(): void {
    this.usersService.getCouponListMock()
      .subscribe(users => this.users = users);
  }

  getCouponListWeb(): void {
    this.usersService.getCouponList(1)
      .subscribe(
        data => {
          this.users = this.createUserMessage(data);
        },
        err => console.error(err),
        () => console.log('done loading questions'));
  }

  // in case you want to append the code
  createUserMessage(data): void {
    for (let i = 0; i < data.length; i++) {
      let savedMsg = data[i].message;
      data[i].message = (savedMsg === null ?  this.msg : savedMsg);
    }
    return data;
  }

  onSubmit2() {
    const u = this.users;
    this.usersService.saveCouponList(u).subscribe(
      data => this.users = data);

    this.ngOnInit();
  }

  onSubmit() {
    const u = this.users;
    this.usersService.saveCouponList(u).subscribe(
      data => this.users = this.ngOnInit());
  }

}
