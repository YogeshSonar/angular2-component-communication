import { ComponentCommunicationPage } from './app.po';

describe('component-communication App', function() {
  let page: ComponentCommunicationPage;

  beforeEach(() => {
    page = new ComponentCommunicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
