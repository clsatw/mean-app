import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logon',
  templateUrl: './logon.component.html',
  styleUrls: ['./logon.component.css']
})
export class LogonComponent implements OnInit {

  constructor(private logon: boolean = false) { }

  ngOnInit() {
  }

  logOn(): boolean {
    return !this.logon;
  }
}
