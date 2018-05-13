module.exports = {
        options: {

            files: ['<%= src.tests %>/*.js']
        },
        spec: {
            options: {
                reporter: 'spec',
                //save: '<%= src.tests %>output/mochacli.out'
            }
        }
}