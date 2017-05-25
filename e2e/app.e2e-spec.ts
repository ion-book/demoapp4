import { Demoapp4Page } from './app.po';

describe('demoapp4 App', () => {
  let page: Demoapp4Page;

  beforeEach(() => {
    page = new Demoapp4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
