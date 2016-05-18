'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        config: grunt.file.readYAML('config/base.yml')
    });

    grunt.loadNpmTasks('grunt-rsync');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-favicons');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.task.loadTasks('./tasks/');
};
