module.exports = {
        options: {
            require: ['should'],
            files: '_src/tests/*.js'
        },
        spec: {
            options: {
                reporter: 'spec'
            }
        },
        nyan: {
            options: {
                reporter: 'nyan'
            }
        }
}