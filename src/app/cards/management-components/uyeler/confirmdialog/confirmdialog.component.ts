import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirmdialog.component.html',
  styleUrls: ['./confirmdialog.component.css']
})
export class ConfirmdialogComponent implements OnInit {
 Baslik!:string
  constructor(
    public dialogRef:MatDialogRef<ConfirmdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  )
  { }

  ngOnInit(): void {
    this.Baslik=this.data
  }

}
