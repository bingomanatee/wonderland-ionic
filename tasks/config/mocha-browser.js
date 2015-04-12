/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 *    https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function (grunt) {

  grunt.config.set('concat',
    {
      mocha_browser: {
        all: {
          options: {
            output: ".tmp/test/coverage.html",
            reporter: 'html-cov',
            urls: ["http://localhost:<%= connect.options.port %>/test.html"]
          }
        }
      }
    });
  grunt.loadNpmTasks('grunt-mocha-browser');
};
