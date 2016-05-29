import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'nx1-user-organizations',
  templateUrl: 'user-organizations.component.html',
  styleUrls: ['user-organizations.component.css']
})
export class UserOrganizationsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
        console.log('user-organizations init');
  }

}
