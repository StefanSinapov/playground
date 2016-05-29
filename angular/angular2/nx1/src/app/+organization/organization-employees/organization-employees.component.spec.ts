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
import { OrganizationEmployeesComponent } from './organization-employees.component';

describe('Component: OrganizationEmployees', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [OrganizationEmployeesComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([OrganizationEmployeesComponent],
      (component: OrganizationEmployeesComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OrganizationEmployeesComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(OrganizationEmployeesComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <nx1-organization-employees></nx1-organization-employees>
  `,
  directives: [OrganizationEmployeesComponent]
})
class OrganizationEmployeesComponentTestController {
}

