import { ConfirmdialogComponent } from './confirmdialog/confirmdialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { FsapiService } from 'src/app/services/fsapi.service';
import { Uye } from 'src/app/models/Uye';
import { DialogComponent } from './dialog/dialog.component';
@Component({
  selector: 'app-uyeler',
  templateUrl: './uyeler.component.html',
  styleUrls: ['./uyeler.component.scss']
})
export class UyelerComponent implements OnInit {
  uyeler!:Uye[];
  dialogRef!: MatDialogRef<DialogComponent>;
  confirmdialogRef!:MatDialogRef<ConfirmdialogComponent>




  constructor(
   private afs:FsapiService,
   private matDialog:MatDialog
  ) {}

  ngOnInit(): void {
    this.uyeleriGetir()
  }
  uyeleriGetir(){
    this.afs.uyeleriGetir().subscribe((data:any) => {
      this.uyeler = data.map(item => {
        return {
          UyeId: item.payload.doc.id,
          ...item.payload.doc.data()
        } as Uye;
      })
    });
  }

  uyeEkle(){
    this.dialogRef=this.matDialog.open(DialogComponent,{
      width:"500px",
      data:{
        islem:"Ekle"
      }
    })
    this.dialogRef.afterClosed().subscribe((data:Uye)=>{
     if(data){
      this.afs.uyeEkle(data).then(e=>{
        this.uyeleriGetir()
      })
     }
    })
  }
  uyeDuzenle(uye:Uye){
    this.dialogRef=this.matDialog.open(DialogComponent,{
      width:"500px",
      data:{
        islem:"Düzenle",
        kayit:uye
      }
    })
    this.dialogRef.afterClosed().subscribe((data:Uye)=>{
      if(data){
       this.afs.uyeDuzenle(data).then(e=>{
         this.uyeleriGetir()
       })
      }
     })



  }

 uyeSil(uye:Uye){
  this.confirmdialogRef=this.matDialog.open(ConfirmdialogComponent,{
    width:"300px",
    data:uye.UyeAdi+" isimli üye silinecek onaylıyor musunuz?"
  })
  this.confirmdialogRef.afterClosed().subscribe((data:boolean)=>{
    if(data==true){
      this.afs.uyeSil(uye.UyeId).then(e=>{
        this.uyeleriGetir()

      })
    }
  })
 }


}


