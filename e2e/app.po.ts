export class FlexchatPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('flexchat-app h1')).getText();
  }
}
