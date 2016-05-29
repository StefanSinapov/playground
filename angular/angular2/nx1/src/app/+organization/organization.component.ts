import { Component, OnInit } from '@angular/core';
import { OrganizationProfileComponent } from './organization-profile';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { OrganizationEmployeesComponent } from './organization-employees';

@Component({
  moduleId: module.id,
  selector: 'nx1-organization',
  templateUrl: 'organization.component.html',
  styleUrls: ['organization.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/organization-profile', component: OrganizationProfileComponent},
  {path: '/organization-employees', component: OrganizationEmployeesComponent}
])
export class OrganizationComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
