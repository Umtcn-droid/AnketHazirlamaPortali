import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
@Component({
  selector: 'app-surveyconfirmdialog',
  templateUrl: './surveyconfirmdialog.component.html',
  styleUrls: ['./surveyconfirmdialog.component.css']
})
export class SurveyconfirmdialogComponent implements OnInit {
  Baslik!:string
  constructor(
     public SdialogRef:MatDialogRef<SurveyconfirmdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) { }

  ngOnInit(): void {
    this.Baslik=this.data
  }

}
