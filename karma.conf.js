// Karma configuration
// Generated on Sun Apr 12 2015 15:53:22 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'assets/',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // list of files / patterns to load in the browser
    files: [

      // Load sails.io before everything else
      'js/dependencies/angular-1.3.13/angular.min.js',
      'js/dependencies/angular-1.3.13/*.js',
      'js/dependencies/ionic-v1.0.0-rc.2/ionic.js',
      'js/dependencies/ionic-v1.0.0-rc.2/*',

      // Dependencies like jQuery, or Angular are brought in here
      'js/dependencies/**/*.js',

      'js/wonderland/app.js',
      'js/wonderland/controllers.js',
      'js/wonderland/services.js',
      'js/wonderland/**/*.js',
      'js/templates.js',

      // All of the rest of your client-side js files
      // will be injected here in no particular order.
      'js/**/*.js',

      // test framework

      'mocha/**/*.js',

      // the tests

      'tests/mocha/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
