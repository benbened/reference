module.exports ={

    tests: {
        files: ['<%= src.tests %>**','<%= src.js %>**'],
        tasks: ["test_mocha"]
    }
};