'use strict';

module.exports = function (grunt) {
    grunt.registerTask('develop', [ 'jekyll:serve' ]);

    grunt.registerTask('build', [ 'jekyll:build' ]);

    grunt.registerTask('deploy', [
        'clean',
        'jekyll:production',
        'favicons',
        'rsync:production'
    ]);

    grunt.registerTask('test', [
        'scsslint',
        'coffeelint'
    ]);

    grunt.registerTask('default', [ 'develop' ]);
};
