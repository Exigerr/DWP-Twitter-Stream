//Server Requires and Base Setup
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 1337}),
    config = require('./Config/default.json'),
    TwitterHandler = require('./Core/twitter.js'),
    Controller = require('./Core/controller.js');

//App Setup
var controller = new Controller();
var twitter = new TwitterHandler(config.twitterKeys);

wss.on('connection', function(ws) {
    ws.on('message', function(obj) {
        try{
            controller.route(JSON.parse(obj), ws);
        }
        catch(e){
            console.log('Someone naughty sent invalid JSON! :O');
        }

    });
});