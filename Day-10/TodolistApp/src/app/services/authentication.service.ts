import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateCurrentUser, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { BehaviorSubject, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  currentUser = authState(this.auth);

  constructor(private auth:Auth) { }

  isAuthenticated():Observable<any>{
    return this.currentUser;
  }
  
  login(username:string,password:string){
    return from(signInWithEmailAndPassword(this.auth,username,password));
  }

  signUp(name:string,email:string,password:string){

    return from(createUserWithEmailAndPassword(this.auth,email,password)).pipe(switchMap(({user})=>
      updateProfile(user,{displayName:name})
    ));
  }

  logout(){
      return from(this.auth.signOut());
  }
}
