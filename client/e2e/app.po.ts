export class Angular2FormsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-forms-app p')).getText();
  }
}
