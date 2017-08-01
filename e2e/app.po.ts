<<<<<<< HEAD
import { browser, element, by } from 'protractor';

export class TmpPage {
=======
import { browser, by, element } from 'protractor';

export class DoNowPage {
>>>>>>> 6f98240ad55af890825641613a1169ccc124bdaa
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
