module.exports = function(grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
  
      jshint: {
        all: ['js/*.js']
      },
  
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'site.min.js': ['js/*.js']
          }
        }
      },
  
      sass: {
        dist: {
          options: {
            style: 'compressed'
          },
          files: {
            'style.css': 'style.scss'
          }
        }
      },
  
      watch: {
        css: {
          files: './*.scss',
          tasks: ['sass'],
          options: {
             livereload: true,
             spawn: false,
          },
        },
        scripts:   {
          files: 'js/*.js', tasks: [ 'uglify' ]
        },
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.registerTask("default", ["watch", "jshint", "uglify", "sass"]);
  };
  