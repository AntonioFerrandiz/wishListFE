import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { UserRegister } from 'src/models/user-register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: FormGroup

  constructor(private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService) { 
      this.register = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        profilePicture: ['', Validators.pattern('(https?:\/\/.*\.(?:png|jpg|jpeg))')]
      })
    }

  ngOnInit(): void {
  }

  userRegister(formDirective: FormGroupDirective):void{
    const register: UserRegister = {
      username: this.register.value.username,
      password: this.register.value.password,
      profilePicture: this.register.value.profilePicture
    }
    if(register.profilePicture == ''){
      const hexCode = Math.floor(Math.random()*16777215).toString(16);
      register.profilePicture = `https://singlecolorimage.com/get/${hexCode}/500x500`
      
    }
    
    this.userService.registerUser(register).subscribe({
      complete: () => {
        this.router.navigate(['/login'])
      },
      error:(err) => {        
        this.toastr.error('Intenta nuevamente', 'Error')
      },
    })
  }

}
