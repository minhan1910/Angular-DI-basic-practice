import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrl: './inactive-users.component.css'
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: string[] = [];

  constructor(private userService: UserService) {
  }
  
  ngOnInit(): void {
    this.inactiveUsers = this.userService.inactiveUsers;
  }

  setActiveUser(id: number) {
    this.userService.setActiveUser(id);
  }

}
