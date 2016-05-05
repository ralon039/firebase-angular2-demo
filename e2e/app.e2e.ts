import { FlexchatPage } from './app.po';

describe('flexchat App', function() {
  let page: FlexchatPage;

  beforeEach(() => {
    page = new FlexchatPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('flexchat works!');
  });
});
