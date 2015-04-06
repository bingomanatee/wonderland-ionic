module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
    'html2js:app',
		'clean:dev',
		'jst:dev',
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
