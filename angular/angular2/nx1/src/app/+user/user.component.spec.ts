// import {
//   beforeEach,
//   beforeEachProviders,
//   describe,
//   expect,
//   it,
//   inject,
// } from '@angular/core/testing';
// import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
// import { Component } from '@angular/core';
// import { ROUTER_PROVIDERS } from '@angular/router'
// import { By } from '@angular/platform-browser';
// import { UserComponent } from './user.component';

// describe('Component: User', () => {
//   let builder: TestComponentBuilder;

//   beforeEachProviders(() => [UserComponent]);
//   beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
//     builder = tcb;
//   }));

//   it('should inject the component', inject([UserComponent],
//       (component: UserComponent) => {
//     expect(component).toBeTruthy();
//   }));

//   it('should create the component', inject([], () => {
//     return builder.createAsync(UserComponentTestController)
//       .then((fixture: ComponentFixture<any>) => {
//         let query = fixture.debugElement.query(By.directive(UserComponent));
//         expect(query).toBeTruthy();
//         expect(query.componentInstance).toBeTruthy();
//       });
//   }));
// });

// @Component({
//   selector: 'test',
//   template: `
//     <nx1-user></nx1-user>
//   `,
//   directives: [UserComponent],
//   providers: [ROUTER_PROVIDERS]
// })
// class UserComponentTestController {
// }

import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { By } from '@angular/platform-browser';
import { UserComponent } from './user.component';

describe('Component: User', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UserComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UserComponent],
    (component: UserComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UserComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UserComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <nx1-user></nx1-user>
  `,
  directives: [UserComponent],
  providers: [ROUTER_PROVIDERS]
})
class UserComponentTestController {
}

