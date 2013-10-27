describe('pages with login', function() {
  it('should log in with a non-Angular page', function() {
    browser.get('http://localhost:8000/app/index.html');

    var angularElement = element(by.input('url'));
    expect(angularElement.getAttribute('value')).toEqual('/fastcall');

    // Make sure the cookie is still set.
    browser.manage().getCookie('testcookie').then(function(cookie) {
      expect(cookie.value).toEqual('Jane-1234');
    });
  });
});
