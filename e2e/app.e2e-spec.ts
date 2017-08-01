<<<<<<< HEAD
import { TmpPage } from './app.po';

describe('tmp App', function() {
  let page: TmpPage;

  beforeEach(() => {
    page = new TmpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
=======
import { DoNowPage } from './app.po';

describe('do-now App', () => {
  let page: DoNowPage;

  beforeEach(() => {
    page = new DoNowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
>>>>>>> 6f98240ad55af890825641613a1169ccc124bdaa
  });
});
