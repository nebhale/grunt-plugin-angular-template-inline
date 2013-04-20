# grunt-plugin-angular-template-inline [![Build Status](https://secure.travis-ci.org/nebhale/grunt-plugin-angular-template-inline.png?branch=master)](http://travis-ci.org/nebhale/grunt-plugin-angular-template-inline)

> Inlines AngularJS templates into an HTML file

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-plugin-angular-template-inline --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-plugin-angular-template-inline');
```

_This plugin was updated to work with Grunt 0.4. It is based on [nebhale/grunt-plugin-angular-template-inline](https://github.com/nebhale/grunt-plugin-angular-template-inline)._

## Angular template inline task
_Run this task with the `grunt angularTemplateInline` command._

This task inlines AngularJS templates into a single HTML file. It does this by creating `<script type="text/ng-template" id="<file-name>">` blocks in the header of the target file.  The id of the `<script>` tags matches the name of each file, relative to the specified base file. Therefore, all code that works before being inlined, will continue to work after it is inlined.

### Usage Examples

Specify the templates to be inlined into a target file. The base file (typically `app/index.html`) is used to set the relative path in the `id` attribute of each template.

```js
angularTemplateInline: {
  app: {
    files: [
      {
        src: ['<%= yeoman.app %>/views/*.html'], // Templates to be inlined
        dest: '<%= yeoman.dist %>/index.html', // Destination file
        baseFile: '<%= yeoman.app %>/index.html' // Base file
      }
    ]
  }
},
```
