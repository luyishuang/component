module.exports = function (grunt) {
  grunt.initConfig({
      htmlmin: {
          options: {
              removeComments: true,
              collapseWhitespace: true
          },
          files: {
              src: './index.html',
              dest: 'dist/index.html'

          }
      },
      cssmin: {
        options: {
          mergeIntoShorthands: false,
          roundingPrecision: -1
        },
        target: {
          files: {
            'dist/layout.css': './layout.css'
          }
        }
      },
      uglify: {
          'dist/main.js': './main.js'
      },
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('default', ['htmlmin','cssmin','uglify']);
  };
  