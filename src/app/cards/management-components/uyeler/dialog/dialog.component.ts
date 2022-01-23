import { Uye } from 'src/app/models/Uye';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
   form!: FormGroup;
   UyeKayit!:Uye
   Baslik!:string;
  constructor(
    public formBuilder:FormBuilder,
    public dialogRef:MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    if(this.data.islem=="Ekle"){
       this.UyeKayit=new Uye();
    }
    else{
      this.UyeKayit=this.data.kayit
    }
   }

  ngOnInit(): void {
    this.Baslik=this.data.islem
    this.form=this.formOlustur();
  }
  formOlustur(){
    return this.formBuilder.group({

      UyeAdi:[this.UyeKayit.UyeAdi],
      UyeTel:[this.UyeKayit.UyeTel],
      UyeEmail:[this.UyeKayit.UyeEmail]
    })
  }
}
