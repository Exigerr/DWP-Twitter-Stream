var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 1337});
var OAuth = require('oauth');

var config = {
    consumerKey: 'jRkuxL691D6c0Dll5Qyr9utlY',
    consumerToken: 'qZLrAcYcMFc3ZspZ6Uy2mBE2ZsYIVv2LG8oOuqlEMek7KW2Uhf',
    token: '3002890787-ZwgAs4BmD9uLu4K8tM4ckBJV6K69oSoGG1G3o63',
    tokenSecret: 'o23hO89XSdQcmr7NTx7kjp26EfGQ0nHU9VAlgIi6ygrB3'
};

var twitterOauth = new OAuth(
    'https://api.twitter.com/oauth/request_token',
    'https://api.twitter.com/oauth/access_token',
    config.consumerKey,
    config.consumerToken,
    '1.0A',
    null,
    'HMAC-SHA1'
);


wss.on('connection', function(ws) {
    ws.on('message', function(obj) {


    });

    ws.on('close', function(){


    });
});