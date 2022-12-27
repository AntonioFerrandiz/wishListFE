import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { UserLogin } from 'src/models/user-login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: FormGroup

  constructor(private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService) { 
      this.login = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {
  }

  userLogin(formDirective: FormGroupDirective):void{
    const login: UserLogin = {
      username: this.login.value.username,
      password: this.login.value.password
    }

    this.loginService.userLogin(login).subscribe(data => {
        this.loginService.setLocalStorage(data['token'])
        this.router.navigate(['/catalogue'])
    }, error => {
      console.log(error);
      
      this.toastr.error('Credenciales incorrectas (?)', 'Error')
    })
  }

}
