/* global browser */
var assert = require( 'assert' );

describe( 'User', function () {

	it( 'should be able to create account', function () {
		browser.url( '/Special:CreateAccount' );
		assert( browser.isVisible( '#wpCreateaccount' ) );
	} );

} );
