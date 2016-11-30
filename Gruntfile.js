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

		// Configure JSCS task
		jscs: {
			src: [ 'Gruntfile.js', 'test/**/*.js', 'wdio.conf.js' ],
			options: {
				config: '.jscsrc'
			}
		},

		// Configure JSHint task
		jshint: {
			all: [ 'Gruntfile.js', 'test/**/*.js', 'wdio.conf.js' ],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Configure WebdriverIO task
		webdriver: {
			test: {
				configFile: './wdio.conf.js'
			}
		}

	} );

	// Default task(s)
	grunt.registerTask( 'default', [ 'eslint', 'jscs', 'jshint' ] );
	grunt.registerTask( 'wdio', 'webdriver' );

};
