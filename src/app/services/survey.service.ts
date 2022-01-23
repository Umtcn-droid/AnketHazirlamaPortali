import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Survey } from '../models/Survey';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  formData!: Survey;

  constructor( private afs:AngularFirestore) { }
  anketleriGetir(){
    return this.afs.collection('Surveys').snapshotChanges()
  }
  anketEkle(anket:Survey){
    delete anket.ID
   return this.afs.collection('Surveys').add(anket)


  }
  anketDuzenle(anket:Survey){
    return this.afs.collection('Surveys').doc(anket.ID).update(anket )
  }
  anketSil(ID){
    return this.afs.collection('Surveys').doc(ID).delete()
  }
}


