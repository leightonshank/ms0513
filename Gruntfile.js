module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    wiredep: {
      task: {
        src: ['views/index.ejs']
      }
    },

    watch: {
      wiredep: {
        files: 'bower.json',
        tasks: ['wiredep']
      },
      livereload: {
        files: ['public/**/*', 'views/*'],
        options: { livereload: true }
      }
    }
  });

  grunt.registerTask('default', ['wiredep']);
};
