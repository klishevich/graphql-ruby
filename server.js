console.log('hi!');
const secret = require('./secrets');

const http = require('http');

http.createServer(function (req, res) {
    const client = require('graphql-ruby-client/sync');
    client({
        url: secret.url,
        secret: secret.secret,
        client: secret.client,
        path: 'documents/',
        outfile: 'OperationStoreClient.js'
    }).then((res) => {
        console.log('!!! result:', res);
    }).catch((e) => {
        console.log('!!! error:', e);
    });
    res.writeHead(200);
    res.end("Check console logs\n");
}).listen(8080);