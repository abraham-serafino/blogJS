describe('Main page', function() {
  var $title = element(by.css('h2'));

  beforeAll(function() {
    browser.waitForAngularEnabled(false);
  });

  it('Should change welcome message when button is clicked', function() {
    browser.get('http://localhost:3000');

    expect($title.getText()).toEqual('Welcome to My Site');
    element(by.css('button')).click();
    expect($title.getText()).toEqual('Hello world');
  });
});
