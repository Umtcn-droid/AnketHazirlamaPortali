import { SurveyconfirmdialogComponent } from './surveyconfirmdialog/surveyconfirmdialog.component';
import { SurveydialogComponent } from './surveydialog/surveydialog.component';
import { Component, OnInit } from '@angular/core';
import { Survey } from 'src/app/models/Survey';
import { SurveyService } from 'src/app/services/survey.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  anketler!:Survey[];
  SdialogRef!: MatDialogRef<SurveydialogComponent>;
  SconfirmdialogRef!:MatDialogRef<SurveyconfirmdialogComponent>

  constructor(private afs:SurveyService,
    private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.anketleriGetir()
  }
  anketleriGetir(){
    this.afs.anketleriGetir().subscribe((data:any) => {
      this.anketler = data.map(item => {
        return {
          UyeId: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Survey;
      })
    });
  }
  anketEkle(){

    this.SdialogRef=this.matDialog.open(SurveydialogComponent,{
      width:"500px",
      data:{
        islem:"Ekle"
      }
    })
    this.SdialogRef.afterClosed().subscribe((data:Survey)=>{
     if(data){
      this.afs.anketEkle(data).then(e=>{
        this.anketleriGetir()
      })
     }
    })
  }

  anketDuzenle(anket:Survey){
    this.SdialogRef=this.matDialog.open(SurveydialogComponent,{
      width:"500px",
      data:{
        islem:"Düzenle",
        kayit:anket
      }
    })
    this.SdialogRef.afterClosed().subscribe((data:Survey)=>{
      if(data){
       this.afs.anketDuzenle(data).then(e=>{
         this.anketleriGetir()
       })
      }
     })



  }

  anketSil(anket:Survey){
  this.SconfirmdialogRef=this.matDialog.open(SurveyconfirmdialogComponent,{
    width:"300px",
    data:anket.Question+" isimli soru silinecek onaylıyor musunuz?"
  })
  this.SconfirmdialogRef.afterClosed().subscribe((data:boolean)=>{
    if(data==true){
      this.afs.anketSil(anket.ID).then(e=>{
        this.anketleriGetir()

      })
    }
  })
 }


}
