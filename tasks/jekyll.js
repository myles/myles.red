'use strict';

module.exports = function (grunt) {
    var config = {
        options: {
            bundleExec: true,
            config: 'config/base.yml'
        },
        build: {
            options: {
                build: true
            }
        },
        serve: {
            options: {
                serve: true,
                auto: true
            }
        },
        production: {
            options: {
                build: true,
                debug: false,
                config: 'config/base.yml,config/prod.yml'
            }
        }
    };

    grunt.config.set('jekyll', config);
};
