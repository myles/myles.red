'use strict';

module.exports = function (grunt) {
    var config = {
        options: {
            args: ["--verbose"],
            recursive: true
        },
        production: {
            options: {
                src: "./build/",
                dest: "/srv/www/myles.red/www/html",
                host: "bear",
                port: "22",
                delete: true,
            }
        },
        podcasts: {
            options: {
                src: "./podcasts/",
                dest: "/srv/www/myles.red/media/html/podcasts",
                host: "bear",
                port: "22"
            }
        }
    };

    grunt.config.set('rsync', config);
};
