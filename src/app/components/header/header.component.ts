import { Component, OnInit } from '@angular/core';
import { FsapiService } from 'src/app/services/fsapi.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public authservice:FsapiService,public router:Router) { }

  ngOnInit(): void {
  }

}
