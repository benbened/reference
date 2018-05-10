module.exports =function(grunt){
    grunt.loadNpmTasks('grunt-mocha-cli')
    grunt.registerTask('test_mocha',['mochacli'] );
};