import { browser, by, element } from 'protractor';

export class NG43ATDDSelectPage {
  navigateTo() {
    return browser.get('/');
  }

  getSelectCount(): any {
    return element(by.id('TDDSelect')).all(by.tagName('option')).count();
  }

  selectCloud(text: string): NG43ATDDSelectPage {
    element(by.id('TDDSelect')).element(by.cssContainingText('option', text)).click();

    return this;
  }

  getSelectedId(): any {
    return element(by.css('p')).getText();
  }
}
