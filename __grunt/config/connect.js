module.exports = {

    server: {
        options: {
            port: 3030, // custom port
            base: './app', // current directory for 'index.html' is root
            keepalive: true, // keep the server alive indefinitely
            open: {
                target: 'http://localhost:3030/index.html',
            }
        }
    },
    mochaFrontendTest: {
        options: {
            port: 2342, // custom port
            base: '.', // current directory for 'index.html' is root
            keepalive: false, // keep the server alive indefinitely
            //open: {
            //    target: 'http://localhost:2342/_src/tests/ocr-frontend-mocha.html',
            //}
        }
    }


};