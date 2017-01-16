var exec = require('child_process').exec

var localServer = function (argv) {
    var port = argv['p']
    exec('python -m SimpleHTTPServer ' + port)
}

module.exports = localServer;