var _ = require('lodash');
var util = require('util');
/**
 * compile angular templates.
 *
 * ---------------------------------------------------------------
 *
 */
module.exports = function (grunt) {

  var NL = "\n";
  var bootstrapTemplate = _.template('angular.module("<%= module %>")' + NL
    + '  .factory("TemplateLoader", function($templateCache){' + NL
  +'  <%= script %>' + NL
 + '  return $templateCache});');

  grunt.config.set('html2js',
    {
      app: {
        src: 'ng-templates/**.html',
        dest: 'assets/js/templates.js',
        options: {
          base: './',
          module: 'cacheLoader'
        }
      }
    });

  grunt.loadNpmTasks('grunt-html2js');
};
