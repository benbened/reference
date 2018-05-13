module.exports ={
	options: {expand: true,
        flatten: true,
	},
    JSasync: {
        files: [
            {expand: true, flatten: true, src: ['<%= src.js %>async/*.min.js'], dest: '_static/js/async', filter: 'isFile'},
        ],
    },
    devbuild:{
        files: [
            {expand: true, flatten: true, src: ['<%= build.js %>*.js'], dest: '<%= dev.js %>', filter: 'isFile'},
            {expand: true, flatten: true, src: ['<%= build.js %>async/*.js'], dest: '<%= dev.js %>async', filter: 'isFile'},
            {expand: true, flatten: true, src: ['<%= build.styles %>*.css'], dest: '<%= dev.styles %>', filter: 'isFile'},
            {expand: true, flatten: true, src: ['<%= build.img %>**'], dest: '<%= dev.img %>', filter: 'isFile'},
        ],

    },
    prodbuild:{
        files: [
            // includes files within path

        ],
    },

};

