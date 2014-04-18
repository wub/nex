/*
  Nex Gruntfile
  http://git.io/nex
  @author Jarrod Mosen
*/

module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    project: {
      assets: 'assets',
      src: '<%= project.assets %>/source',
      css: '<%= project.src %>/styles/<%= pkg.name %>.scss',
      js:  '<%= project.src %>/scripts/<%= pkg.name %>.coffee'
    },
    tag: {
      banner:
            '/*!\n' +
            ' * <%= pkg.name %>\n' +
            ' * <%= pkg.title %>\n' +
            ' * <%= pkg.url %>\n' +
            ' * @author <%= pkg.author %>\n' +
            ' * @version <%= pkg.version %>\n' +
            ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
            ' */\n'
    },
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded',
          banner: '<%= tag.banner %>'
        },
        files: {
          '<%= project.assets %>/styles/<%= pkg.name %>.css': '<%= project.css %>'
        }
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          '<%= project.assets %>/styles/<%= pkg.name %>.css': '<%= project.css %>'
        }
      }
    },
    coffee: {
      dev: {
        options: {
          join: true,
          sourceMap: true
        },
        files: {
          '<%= project.assets %>/scripts/<%= pkg.name %>.js': '<%= project.js %>', // 1:1 compile
        }
      }
    },
    watch: {
      sass: {
        files: '<%= project.src %>/styles/{,*/}*.scss',
        tasks: ['sass:dev']
      },
      coffee: {
        files: '<%= project.src %>/scripts/{,*/}*.coffee',
        tasks: ['coffee:dev']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', [
    'sass:dev',
    'coffee:dev',
    'watch'
  ]);
};
