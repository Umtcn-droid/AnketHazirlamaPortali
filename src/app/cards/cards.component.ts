import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(
    public dialog: MatDialog,


  ) { }

  ngOnInit(): void {

  }




}
