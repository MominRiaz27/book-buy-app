import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { loginform, registrationform } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuthenticated:boolean=false;
  isloading:boolean = false;


  constructor(private router:Router) { }


  login(form:loginform){
    if(this.isloading)return;
    this.isloading=true;
    

    const auth = getAuth();
      signInWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          // Signed in 
          //alert('login success')
          this.isAuthenticated=true
          this.router.navigate(['']);
          //const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          //alert("credentials does not match")
          this.isAuthenticated=false

        })
        .finally(() => (this.isloading = false))
      
  }


  register(form:registrationform){

    if(this.isloading)return;
  
    this.isloading=true;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        console.log(userCredential)
        alert("registration successful") 
        //this.isAuthenticated=true
        this.router.navigate(['login']);
        //const user = userCredential.user;
        
      })
      .catch((error) => {
        this.isAuthenticated=false
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=>(this.isloading=false))
  }

  logout(){
    console.log("inside logout")
    const auth=getAuth();
    signOut(auth)
    .then(()=>{
      this.router.navigate(['login'])
      this.isAuthenticated=false;
    })
    .catch((error)=>{

    })
  }
  
}
