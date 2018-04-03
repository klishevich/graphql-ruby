console.log('hi!');
const client = require('graphql-ruby-client/sync');
const secret = require('./secrets');
client({
    url: secret.url,
    secret: secret.secret,
    client: secret.client,
    path: 'documents/',
    outfile: 'OperationStoreClient.js'
});
