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
        src: 'assets/ng-templates/**.html',
        dest: 'assets/ng-templates/templates.js',
        options: {
          base: 'assets/ng-templates',
          module: 'cacheLoader',
          rename: function(url){
            return url.replace('assets/ng-templates/', '');
          },
        /*  bootstrap: function (module, script) {
            return bootstrapTemplate({module: module, script: script.replace("'use strict';", ''), util: util})
          } */
        }
      }
    });

  grunt.loadNpmTasks('grunt-html2js');
};
