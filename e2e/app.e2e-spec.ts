import { MyTripPage } from './app.po';

describe('my-trip App', function() {
  let page: MyTripPage;

  beforeEach(() => {
    page = new MyTripPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
