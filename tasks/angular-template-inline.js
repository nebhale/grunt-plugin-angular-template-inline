/*
 * Copyright 2012 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*jshint node:true*/
'use strict';

var _ = require('lodash');

var IdGenerator = require('./support/id-generator');
var TemplateInserter = require('./support/template-inserter');
var TemplateWrapper = require('./support/template-wrapper');

module.exports = function(grunt) {

	grunt.registerMultiTask('angularTemplateInline', 'Inline AngularJS templates into an HTML file', function() {

		var templateInserter = new TemplateInserter();
		var templateWrapper = new TemplateWrapper();

		_.each(this.files, function (file) {
			var idGenerator = new IdGenerator(file.baseFile);

			var templates = _.map(file.src, function (src) {
				var id = idGenerator.create(src);
				grunt.verbose.write('Appending ' + id + '...');
				var template = templateWrapper.wrap(id, grunt.file.read(src));
				grunt.verbose.ok();

				return template;
			});

			var baseContent = grunt.file.read(file.dest);
			var targetContent = templateInserter.insert(baseContent, templates);

			grunt.file.write(file.dest, targetContent);

			grunt.log.ok(file.src.length + ' template' + (file.src.length === 1 ? '' : 's') + ' inlined');
		});
	});
};
