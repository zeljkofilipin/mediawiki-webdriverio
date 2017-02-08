module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration
	grunt.initConfig( {

		// Configure ESLint task
		eslint: {
			all: [
				'**/*.js',
				'!node_modules/**'
			]
		},

		// Configure JSONLint task
		jsonlint: {
			all: [
				'**/*.json',
				'!node_modules/**'
			]
		},

		// Configure WebdriverIO task
		webdriver: {
			test: {
				configFile: './wdio.conf.vagrant.js'
			}
		}

	} );

	// Default task(s)
	grunt.registerTask( 'default', [ 'eslint', 'jsonlint' ] );

};
