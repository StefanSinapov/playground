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
import { OrganizationComponent } from './organization.component';

describe('Component: Organization', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [OrganizationComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([OrganizationComponent],
    (component: OrganizationComponent) => {
      expect(component).toBeTruthy();
    }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OrganizationComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(OrganizationComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <nx1-organization></nx1-organization>
  `,
  directives: [OrganizationComponent],
  providers: [ROUTER_PROVIDERS]
})
class OrganizationComponentTestController {
}

