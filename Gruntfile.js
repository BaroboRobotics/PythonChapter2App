module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['src/js/app.js', 'src/js/controllers.js', 'src/js/directives.js', 'src/js/services.js'],
                dest: 'dist/js/main.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/js/main.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, cwd: 'src/', src: ['css/**', 'fonts/**', 'js/bootstrap*', 'img/**'], dest: 'dist/'},
                    {expand: true, cwd: 'src/html', src: ['**'], dest: 'dist/'}
                ]
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/js/app.js', 'src/js/controllers.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        connect: {
          server: {
              options: {
                  port: 9001,
                  base: 'dist',
                  keepalive: true,
                  livereload: true
              }
          }  
            
        },
        watch: {
            files: ['<%= jshint.files %>', '<%= copy.main.files %>'],
            tasks: ['jshint', 'concat', 'uglify', 'copy'],
            options: {
                livereload: true
            }
        },
        clean: ['dist']
    });

    
    
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'copy']);
    grunt.registerTask('testapp', ['connect', 'watch']);

};
