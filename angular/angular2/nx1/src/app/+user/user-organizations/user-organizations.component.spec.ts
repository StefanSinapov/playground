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
import { UserOrganizationsComponent } from './user-organizations.component';

describe('Component: UserOrganizations', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [UserOrganizationsComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([UserOrganizationsComponent],
      (component: UserOrganizationsComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(UserOrganizationsComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(UserOrganizationsComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <nx1-user-organizations></nx1-user-organizations>
  `,
  directives: [UserOrganizationsComponent]
})
class UserOrganizationsComponentTestController {
}

