module.exports ={

    tests: {
        files: ['<%= src.tests %>*.js','<%= src.tests %>data/**','<%= src.js %>modules/.js*'],
        tasks: ["test_mocha"]
    },
    JSall: {
        files: "<%= src.js %>*.js",
        tasks: ["concat:JSall"]
    },
    JSasync: {
        files: "<%= src.js %>async/*.js",
        tasks: ["copy:JSasync"]
    },
    JSmodules: {
        files: "<%= src.js %>modules/*.js",
        tasks: ["concat:JSmodules"]
    },
    JSvendors: {
        files: "<%= src.js %>vendor/*.js",
        tasks: ["concat:JSvendors"]
    },
    CSSbootstrap:{
        files: "<%= src.styles %>config/bootstrap.scss",
        tasks: ["sass:bootstrap"]
    },
    CSSmodules:{
        files: ["<%= src.styles %>config/modules.scss","<%= src.styles %>modules/*.scss"],
        tasks: ["sass:modules"]
    },
    CSSvendor:{
        files: ["<%= src.styles %>config/vendor.scss","<%= src.styles %>vendor/*.scss"],
        tasks: ["sass:vendor"]
    },
    CSSall:{
        files: ["<%= src.styles %>config/all.scss","<%= src.styles %>temp/*.scss"],
        tasks: ["sass:all","postcss"]
    },
    buildwatch:{
        files: ["<%= build.styles %>*.css","<%= build.js %>*.js","<%= build.img %>**"],
        tasks: ["copy:devbuild"]
    }

};