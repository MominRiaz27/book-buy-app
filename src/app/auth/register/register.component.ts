import { Component, OnInit } from '@angular/core';
import { registrationform } from '../auth';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: registrationform = {
    email : '',
    password : '',
    confirmpassword : ''
  }
  constructor(private authservice:AuthService) {}

  

  submit() {
    this.authservice.register(this.form)
  }

  ngOnInit(): void {
  }

  isloading(){
    return this.authservice.isloading;
  }

}
