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

  ngOnInit() {
    // this.getUsersMock();
    this.getUsersWeb();
    }

  message = 'dfafaaddaf';
  code = '8458';

  getUsersMock(): void {
    this.usersService.getUsersMock()
      .subscribe(users => this.users = users);
  }

  getUsersWeb(): void {
    this.usersService.getUsers(1)
      .subscribe(
        data => {this.users = data},
        err => console.error(err),
        () => console.log('done loading questions'));
  }

}
