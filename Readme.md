# grunt-plugin-angular-template-inline [![Build Status](https://secure.travis-ci.org/nebhale/grunt-plugin-angular-template-inline.png?branch=master)](http://travis-ci.org/nebhale/grunt-plugin-angular-template-inline)

> Inlines AngularJS templates into an HTML file

## Getting Started
_If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide._

From the same directory as your project's [Gruntfile][Getting Started] and [package.json][], install this plugin with the following command:

```bash
npm install grunt-plugin-angular-template-inline --save-dev
```

Once that's done, add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-plugin-angular-template-inline');
```

If the plugin has been installed correctly, running `grunt --help` at the command line should list the newly-installed plugin's task or tasks. In addition, the plugin should be listed in package.json as a `devDependency`, which ensures that it will be installed whenever the `npm install` command is run.

[grunt]: http://gruntjs.com/
[Getting Started]: https://github.com/gruntjs/grunt/blob/devel/docs/getting_started.md
[package.json]: https://npmjs.org/doc/json.html

## Buster task
_Run this task with the `grunt angularTemplateInline` command._

_This task is a [multi task][] so any targets, files and options should be specified according to the [multi task][] documentation._
[multi task]: https://github.com/gruntjs/grunt/wiki/Configuring-tasks

This task inlines AngularJS templates into a single HTML file.  It does this by creating `<script type="text/ng-template" id="<file-name>">` blocks in the header of the target file.  The id of the `<script/>` tags matches the name of each file, relative to the base file that the others are being inlined into.  Therefore, all code that works before being inlined, will continue to work after it is inlined.

### Usage Examples

#### Typical

Typical configuration is simply to identify a mapping between the a destination file and the files to be inlined.  By convention, the first file in the collection is the base files that all others will be inlined into.

```js
angularTemplateInline: {
	app: {
		files: {
			'build/index.html': ['src/**/*.html']
		}
	}
},
```
