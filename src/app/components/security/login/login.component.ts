import { UserService } from './../../../services/user.service';
import { SharedService } from './../../../services/shared.service';
import { User } from './../../../model/user.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User('','','','');
  shared: SharedService;
  message: string;

  constructor(
    private userService : UserService,
    private router: Router
  ) {
      this.shared = SharedService.getInstance();
   }

  ngOnInit() {
  }


  
}
