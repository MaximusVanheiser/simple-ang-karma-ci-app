'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        karma: {
            options: {
                configFile: 'karma.conf.js'
            },
            dev: {
                singleRun: false,
                autoWatch: true
            },
            prod: {
                singleRun: true
            },
            cov: {
                singleRun: true,
                autoWatch: false,

                reporters: ['progress', 'junit','coverage'],

                plugins: [
                            'karma-jasmine',
                            'karma-phantomjs-launcher',
                            'karma-coverage',
                            'karma-junit-reporter'
                ]
            },

            coverage: {
                          disposeCollector: true,
                          src: ['src/js/**/*.js'],
                          instrumentedFiles: 'temp/',
                          htmlReport: 'coverage/',
                          coberturaReport: 'coverage/',
                          linesThresholdPct: 85
            }

        }
    });

    // Automatically load in all Grunt npm tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};