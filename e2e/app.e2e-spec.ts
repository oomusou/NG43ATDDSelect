import { NG43ATDDSelectPage } from './app.po';

describe('ng43-atddselect App', () => {
  let page: NG43ATDDSelectPage;

  beforeEach(() => {
    page = new NG43ATDDSelectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
