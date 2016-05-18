'use strict';

module.exports = function (grunt) {
    grunt.registerTask('run', [ 'jekyll:serve' ]);

    grunt.registerTask('build', [ 'jekyll:build' ]);

    grunt.registerTask('deploy', [
        'clean',
        'jekyll:production',
        'favicons',
        'rsync:production'
    ]);

    grunt.registerTask('default', [ 'run' ]);
};
