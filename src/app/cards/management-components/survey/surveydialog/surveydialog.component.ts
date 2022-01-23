import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/Survey';

@Component({
  selector: 'app-surveydialog',
  templateUrl: './surveydialog.component.html',
  styleUrls: ['./surveydialog.component.css']
})
export class SurveydialogComponent implements OnInit {
  form!: FormGroup;
  anketKayit!:Survey;
  Baslik!:string;
  constructor(
    public formBuilder:FormBuilder,
    public SdialogRef:MatDialogRef<SurveydialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    if(this.data.islem=="Ekle"){
      this.anketKayit=new Survey();
   }
   else{
     this.anketKayit=this.data.kayit
   }
   }

  ngOnInit(): void {
    this.Baslik=this.data.islem
    this.form=this.formOlustur();
  }
  formOlustur(){
    return this.formBuilder.group({
      ID:[this.anketKayit.ID],
      Question:[this.anketKayit.Question],

    })
  }

}
