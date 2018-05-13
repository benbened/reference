module.exports ={

    options: {
        map: false, // inline sourcemaps

        // or
        map: {
            inline: false, // save all sourcemaps as separate files...
            annotation: '_static/css/maps/' // ...to the specified directory
        },

        processors: [
            require('pixrem')(), // add fallbacks for rem units
            require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
            require('cssnano')() // minify the result
        ]
    },
    dist: {
        src: '<%= build.styles %>styles.css'
    }
};