module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin:{
      options:{
        removeComments: true,
        collapseWhitespace: true
      },
      files:{
        src:"./dist/index.html",
        dest:"./dist/index.html"
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/layout.min.css': './*.css'
        }
      }
    },
    uglify:{
      release:{
        files:{
          "./dist/main.min.js":"./main.js"
        }
      }
    },
    copy: {
      html: {
        src: './index.html',
        dest: './dist/index.html'
      }
    },
    useminPrepare: {
      html: './index.html',
      options: {
        dest: './dist'
      }
    },
    usemin: {
      html: ['./dist/index.html']
    }
  })

  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');

  grunt.registerTask("release",['copy','cssmin','uglify','useminPrepare', 'usemin','htmlmin'])
};