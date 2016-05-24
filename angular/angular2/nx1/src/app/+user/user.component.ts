import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from './+profile';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/profile', component: ProfileComponent}
])
export class UserComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
