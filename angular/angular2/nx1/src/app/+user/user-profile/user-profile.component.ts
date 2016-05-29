import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nx1-user-profile',
  templateUrl: 'user-profile.component.html',
  styleUrls: ['user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() {}

  ngOnInit() {
        console.log('user-profile init');
  }

}
