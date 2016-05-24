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
import { By } from '@angular/platform-browser';
import { UserProfileEditComponent } from './user-profile-edit.component';

describe('Component: UserProfileEdit', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UserProfileEditComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UserProfileEditComponent],
      (component: UserProfileEditComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UserProfileEditComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UserProfileEditComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-user-profile-edit></app-user-profile-edit>
  `,
  directives: [UserProfileEditComponent]
})
class UserProfileEditComponentTestController {
}

