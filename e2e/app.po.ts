import { browser, by, element } from 'protractor';

export class NG43ATDDSelectPage {
  navigateTo() {
    return browser.get('/');
  }

  getSelectCount(): any {
    return element(by.id('TDDSelect')).all(by.tagName('option')).count();
  }

  select(text: string) {
    element(by.cssContainingText('option', text)).click();
  }

  getSelectedId(): any {
    return element(by.css('p')).getText();
  }
}
