console.log('hi!');
const secret = require('./secrets');

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync(secret.key),
    cert: fs.readFileSync(secret.cert),
    passphrase: 'qwerty'
};

https.createServer(options, function (req, res) {
    const client = require('graphql-ruby-client/sync');
    client({
        url: secret.url,
        secret: secret.secret,
        client: secret.client,
        path: 'documents/',
        outfile: 'OperationStoreClient.js'
    }).then((res) => {
       console.log('!!! result:', res);
    });
    res.writeHead(200);
    res.end("hello world\n");
}).listen(8000);
