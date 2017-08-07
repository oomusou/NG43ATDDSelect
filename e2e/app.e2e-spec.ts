import { NG43ATDDSelectPage } from './app.po';

describe('NG43ATDDSelect', () => {
  let page: NG43ATDDSelectPage;

  beforeEach(() => {
    page = new NG43ATDDSelectPage();
  });

  it(`should have 3 options in select`, () => {
    page.navigateTo();
    expect(page.getSelectCount()).toBe(3);
  });

  it(`should show '0' when selecting 'AWS' `, () => {
    page.navigateTo();
    page.select('AWS');

    expect(page.getSelectedId()).toBe('0');
  });

  it(`should show '1' when selecting 'Azure'  `, () => {
    page.navigateTo();
    page.select('Azure');

    expect(page.getSelectedId()).toBe('1');
  });

  it(`should show '2' when selecting 'Aliyun`, () => {
    page.navigateTo();
    page.select('Aliyun');

    expect(page.getSelectedId()).toBe('2');
  });
});
