import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';

import { UserProfileComponent } from './user-profile';
import { UserOrganizationsComponent } from './user-organizations';

@Component({
  moduleId: module.id,
  selector: 'nx1-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/profile', component: UserProfileComponent },
  { path: '/organizations', component: UserOrganizationsComponent }
])
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('user init');
  }

}
