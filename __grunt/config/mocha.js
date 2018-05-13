module.exports = {

    server: {
        options: {
            port: 3030, // custom port
            base: './app', // current directory for 'index.html' is root
            keepalive: true, // keep the server alive indefinitely
        }
    },
    mochaFrontendTest: {
        options: {
            port: 2342, // custom port
            base: './_src/tests', // current directory for 'index.html' is root
            keepalive: true, // keep the server alive indefinitely
            open: {
                target: 'http://localhost:2342/ocr-frontend-mocha.html',
            }
        }
        }
    }

}