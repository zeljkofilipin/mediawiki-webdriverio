/* global browser */
var assert = require( 'assert' );
describe( 'Page', function () {
	it( 'should be created', function () {
		browser.url( '/Does_not_exist' );
		assert( browser.isVisible( 'li#ca-edit a' ) );
	} );
} );
