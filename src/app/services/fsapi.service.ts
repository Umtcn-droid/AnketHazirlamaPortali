import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import {Router} from '@angular/router';

import { Uye } from '../models/Uye';
@Injectable({
  providedIn: 'root'
})
export class FsapiService {
 formData!: Uye;
 authState: any = null;
 isAuthenticated = false;

  constructor(
    private afs:AngularFirestore,
    private afu: AngularFireAuth,
    private router: Router
  ) {
    this.afu.authState.subscribe((auth =>{
      this.authState = auth;
    }))
  }
  //region uyeler

  uyeleriGetir(){
    return this.afs.collection('uyeler').snapshotChanges()
  }
  uyeEkle(uye:Uye){
    delete uye.UyeId
   return this.afs.collection('uyeler').add(uye)


  }
  uyeDuzenle(uye:Uye){
    return this.afs.collection('uyeler').doc(uye.UyeId).update(uye )
  }
  uyeSil(UyeId){
    return this.afs.collection('uyeler').doc(UyeId).delete()
  }



  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserName(): string {
    return (this.authState !== null) ? this.authState.UyeAdi:''
  }

  get currentUserEmail(): string {
    return this.authState['UyeEmail']
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      this.isAuthenticated = true;
      this.router.navigate(['main']);

      return true
    } else {
      return false
    }
  }

registerWithEmail(ad:string,tel:string,UyeEmail: string, password: string) {
    return this.afu.createUserWithEmailAndPassword(UyeEmail, password)
      .then((user) => {
        return this.afs.collection('uyeler').doc().set({
          UyeAdi:ad,
          UyeTel:tel,
          UyeEmail:UyeEmail});

    }).then((user)=>{
        this.authState = user
      }).catch(error => {
        console.log(error)
        throw error
      });
}
loginWithEmail(UyeEmail: string, password: string)
  {
    return this.afu.signInWithEmailAndPassword(UyeEmail, password)
      .then((user) => {
        this.authState = user
        this.isAuthenticated = true;
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }
singout(): void
  {
    this.afu.signOut();
    this.router.navigate(['/']);
  }
}

