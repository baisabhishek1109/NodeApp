var http = require('http');

(function() {
    http.createServer(function (request, response) {
        console.log(request.url + ' ' + request.method);
        response.end();
    }).listen(3000, function () {
        console.log('started listening');
    });
})();