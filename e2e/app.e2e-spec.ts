import { DoNowPage } from './app.po';

describe('do-now App', () => {
  let page: DoNowPage;

  beforeEach(() => {
    page = new DoNowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
