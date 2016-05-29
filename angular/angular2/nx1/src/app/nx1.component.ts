import { Component, OnInit } from '@angular/core';
import { Routes, ROUTER_DIRECTIVES} from '@angular/router';
import { Title } from '@angular/platform-browser';

import { UserComponent } from './+user';
import { OrganizationComponent } from './+organization';
import { DriveComponent } from './+drive';

@Component({
  moduleId: module.id,
  selector: 'nx1-app',
  templateUrl: 'nx1.component.html',
  styleUrls: ['nx1.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  { path: '/drive', component: DriveComponent },
  { path: '/user', component: UserComponent },
  { path: '/organization', component: OrganizationComponent },
])
export class Nx1AppComponent implements OnInit {

  constructor(public title: Title) {
  }
  
  ngOnInit() {
    this.title.setTitle('NX1')
  }
  
  logout($event){
    $event.preventDefault();
    console.log('logout clicked')
  }
}
