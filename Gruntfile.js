/*jshint node:true*/
'use strict';

module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-plugin-buster');

	grunt.initConfig({
		locations: {
			src: ['tasks/**/*.js'],
			test: ['test/**/*.js']
		},

		buster: {
			angularTemplateInline: {}
		},

		jshint: {
			src: '<%= locations.src %>',
			test: '<%= locations.test %>',
			options: {
				jshintrc: '.jshintrc'
			}
		},

		watch: {
			src: {
				files: '<%= locations.src %>',
				tasks: ['buster']
			},

			test: {
				files: '<%= locations.test %>',
				tasks: ['buster']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'buster']);
	grunt.registerTask('test', ['jshint', 'buster']);

};
