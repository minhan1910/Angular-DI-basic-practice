import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrl: './active-users.component.css'
})
export class ActiveUsersComponent implements OnInit {

  activeUsers: string[] = [];

  constructor(private userService: UserService) {
  }
  
  ngOnInit(): void {
    this.activeUsers = this.userService.activeUsers;
  }

  setInActiveUser(id: number) {
    this.userService.setInActiveUser(id);
  }

}
