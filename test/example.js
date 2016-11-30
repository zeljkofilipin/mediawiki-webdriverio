var assert = require( 'assert' );
describe( 'webdriver.io page', function () {
	it( 'should have the right title - the fancy generator way', function () {
		var title;
		browser.url( 'http://webdriver.io' );
		title = browser.getTitle();
		assert.equal( title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs' );
	} );
} );
