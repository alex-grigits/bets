import { BetsAppPage } from './app.po';

describe('bets-app App', function() {
  let page: BetsAppPage;

  beforeEach(() => {
    page = new BetsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
