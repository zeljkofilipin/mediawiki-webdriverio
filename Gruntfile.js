module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration.
	grunt.initConfig( {

		// Configure eslint task
		eslint: {
			all: [
				'**/*.js',
				'!node_modules/**'
			]
		},

		// Configure jscs task
		jscs: {
			src: [ 'Gruntfile.js', 'test/**/*.js', 'wdio.conf.js' ],
			options: {
				config: '.jscsrc'
			}
		},

		// Configure jshint task
		jshint: {
			all: [ 'Gruntfile.js', 'test/**/*.js', 'wdio.conf.js' ],
			options: {
				jshintrc: '.jshintrc'
			}
		}

	} );

	// Default task(s).
	grunt.registerTask( 'default', [ 'eslint', 'jscs', 'jshint' ] );

};
