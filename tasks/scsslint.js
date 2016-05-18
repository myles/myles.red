'use strict';

module.exports = function (grunt) {
    var config = {
        allFiles: [
            'source/_assets/stylesheets/**/*.scss'
        ],
        options: {
            bundleExec: true,
            colorizeOutput: true
        }
    };

    grunt.config.set('scsslint', config);
};
