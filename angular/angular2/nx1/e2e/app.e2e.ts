import { Nx1Page } from './app.po';

describe('nx1 App', function() {
  let page: Nx1Page;

  beforeEach(() => {
    page = new Nx1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nx1 works!');
  });
});
