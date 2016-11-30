module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration.
	grunt.initConfig( {

		// Configure a jscs task
		jscs: {
			src: [ 'Gruntfile.js', 'test/**/*.js', 'wdio.conf.js' ],
			options: {
				config: '.jscsrc'
			}
		},

		// Configure a jshint task
		jshint: {
			all: [ 'Gruntfile.js', 'test/**/*.js', 'wdio.conf.js' ],
			options: {
				jshintrc: '.jshintrc'
			}
		}

	} );

	// Default task(s).
	grunt.registerTask( 'default', [ 'jscs', 'jshint' ] );

};
