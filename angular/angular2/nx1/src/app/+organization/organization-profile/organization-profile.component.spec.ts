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
import { OrganizationProfileComponent } from './organization-profile.component';

describe('Component: OrganizationProfile', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [OrganizationProfileComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([OrganizationProfileComponent],
      (component: OrganizationProfileComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(OrganizationProfileComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(OrganizationProfileComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <nx1-organization-profile></nx1-organization-profile>
  `,
  directives: [OrganizationProfileComponent]
})
class OrganizationProfileComponentTestController {
}

