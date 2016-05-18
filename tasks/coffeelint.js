'use strict';

module.exports = function (grunt) {
    var config = {
        app: [ 'source/_assets/javascripts/**/*.coffee' ],
        options: {
            'max_line_length': {
                'level': 'ignore'
            }
        }
    };

    grunt.config.set('coffeelint', config);
};
