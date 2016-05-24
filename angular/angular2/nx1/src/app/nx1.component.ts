import { Component } from '@angular/core';
import { UserComponent } from './+user';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'nx1-app',
  templateUrl: 'nx1.component.html',
  styleUrls: ['nx1.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/user/...', component: UserComponent}
])
export class Nx1AppComponent {
  title = 'nx1 works!';
}
