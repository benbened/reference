module.exports = {

    test: {
        options: {
            urls: [ 'http://localhost:2342/_src/tests/ocr-frontend-mocha.html' ],
            timeout: 5000,
            growlOnSuccess: false,
            reporter: 'Spec'
        },
        dest: './_src/tests/output/Spec.out'
    }

};