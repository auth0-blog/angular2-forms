import { Angular2FormsPage } from './app.po';

describe('angular2-forms App', function() {
  let page: Angular2FormsPage;

  beforeEach(() => {
    page = new Angular2FormsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-forms Works!');
  });
});
