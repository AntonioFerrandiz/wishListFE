import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showProfile = false
  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.verifyLogin()
  }
  verifyLogin():void{    
    if (this.loginService.getToken() == null) {
      this.showProfile = false
    } else{
      this.showProfile = true
    }
  }

}
