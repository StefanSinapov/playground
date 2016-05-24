export class Nx1Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nx1-app h1')).getText();
  }
}
