console.log('hi!');

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem'),
    passphrase: 'qwerty'
};

https.createServer(options, function (req, res) {
    const client = require('graphql-ruby-client/sync');
    const secret = require('./secrets');
    client({
        url: secret.url,
        secret: secret.secret,
        client: secret.client,
        path: 'documents/',
        outfile: 'OperationStoreClient.js'
    }).then((res) => {
       console.log(res);
    });
    res.writeHead(200);
    res.end("hello world\n");
}).listen(8000);
