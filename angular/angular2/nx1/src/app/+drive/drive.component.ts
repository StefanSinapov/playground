import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nx1-drive',
  templateUrl: 'drive.component.html',
  styleUrls: ['drive.component.css']
})
export class DriveComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('drive init')
  }

}
