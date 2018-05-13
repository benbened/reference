module.exports = function(grunt) {
    // Pre-declaration so that grunt.file.read can handle vars
    var path = require('path');
    require('load-grunt-config')(grunt, {
        configPath: path.join(process.cwd(), '__grunt/config'),
        jitGrunt: {
            customTasksDir: '__grunt/tasks'
        },
        //Vars for global use in tasks & configs
        data: {
            //vars source
            src: {
                base:'_src',
                js:'<%= src.base %>/js/',
                img:'<%= src.base %>/img/',
                tests:'<%= src.base %>/tests/',
                styles:'<%= src.base %>/styles/',
                templates:'<%= src.base %>/templates/'
            },
            //vars build
            build:{
                base:'_static',
                js:'<%= build.base %>/js/',
                img:'<%= build.base %>/img/',
                styles:'<%= build.base %>/css/'

            },
            //vars dev
            dev:{
                base:'app',
                js:'<%= dev.base %>/js/',
                img:'<%= dev.base %>/img/',
                styles:'<%= dev.base %>/css/'
            },
            //vars prod
            prod:{
            },
        }
    });
};