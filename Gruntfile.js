/*global module:false*/

'use strict';

var request = require('request');

module.exports = function (grunt) {

    // Loads grunt tasks automatically - no need to add "grunt.loadNpmTasks('grunt-task...')"
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        wiredep: {

            task: {
                src: [
                    'index.html'
                ]
            }

        }

    });

};