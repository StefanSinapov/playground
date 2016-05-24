import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Nx1AppComponent } from '../app/nx1.component';

beforeEachProviders(() => [Nx1AppComponent]);

describe('App: Nx1', () => {
  it('should create the app',
      inject([Nx1AppComponent], (app: Nx1AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'nx1 works!\'',
      inject([Nx1AppComponent], (app: Nx1AppComponent) => {
    expect(app.title).toEqual('nx1 works!');
  }));
});
