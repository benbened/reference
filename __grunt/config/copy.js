module.exports ={
	options: {
	},
    devbuild: {
        files: [
            // includes files within path
            {expand: true, src: ['css/*.css'], dest: '_static/', filter: 'isFile'},

        ],
    },
    templatebuild:{
        files: [
            // includes files within path
            {expand: true, src: ['css/*.css'], dest: '_static/', filter: 'isFile'},

        ],
    },
    livebuild:{
        files: [
            // includes files within path
            {expand: true, cwd: '_static/', src: ['**'], dest: '../../hybris/custom-extensions/salesdashboard/web/webroot/'}

        ],
    }
};
