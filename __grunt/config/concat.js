module.exports ={
    options: {
    },
    JSbootstrap: {
        src: ['node_modules/bootstrap/js/dist/*.js'],
        dest: '<%= src.js %>vendor/bootstrap.js',
    },
    JSvendors: {
        src: [
            '<%= src.js %>vendor/jquery-3.2.1.min.js',
            '<%= src.js %>vendor/modernizr-3.5.0.min.js',
            '<%= src.js %>vendor/bootstrap.js',
            'node_modules/popper.js/dist/umd/popper.min.js',
            'node_modules/popper.js/dist/umd/popper-utils.min.js',
            'node_modules/tooltip-js/dist/tooltip-min.js'
        ],
        dest: '<%= src.js %>libs.js',
    },
    JSmodules: {
        src: [
            '<%= src.js %>modules/*.js'
        ],
        dest: '<%= src.js %>modules.js',
    },
    JSall: {
        src: [
            '<%= src.js %>libs.js',
            '<%= src.js %>app.js',
            '<%= src.js %>modules.js',
        ],
        dest: '<%= build.js %>script.js',
    }
};