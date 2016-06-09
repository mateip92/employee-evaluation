module.exports = function(grunt) {
    grunt.initConfig({
        wiredep: {
            task: {
                src: 'public/index.html'
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: [{
                    src: 'public/styles/scss/style.scss',
                    dest: 'public/styles/css/style.css'
                }]
            }
        },

        execute: {
            app: {
                src: ['./app.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-execute');

    grunt.registerTask('run', ['env:dev', 'wiredep', 'sass', 'execute:app']);
};
