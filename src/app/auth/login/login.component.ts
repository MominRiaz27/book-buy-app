import { Component, OnInit } from '@angular/core';
import { loginform } from '../auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authservice : AuthService) { }

  form : loginform = {
    email : '',
    password : '',
  };

  ngOnInit(): void {
  }

 

  submit(){
    this.authservice.login(this.form);
        
  }
  isloading(){
    return this.authservice.isloading;
  }

}
