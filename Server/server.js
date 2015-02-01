//Server Requires and Base Setup
var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({port: 1337}),
    config = require('./Config/default.json'),
    TwitterStream = require('./Core/twitter.js'),
    THandler = require('./Core/handler.js'),
    Controller = require('./Core/controller.js');

//App Setup
var controller = new Controller();
var twitter = new TwitterStream(config.twitterKeys, 'filter');
var tHandler = new THandler(twitter);
twitter.start(tHandler.getParams(), tHandler.response.bind(tHandler));

wss.on('connection', function(ws) {
    ws.on('message', function(obj) {
        var data;
        try{
            data = JSON.parse(obj);
        }
        catch(e){
            console.log('Someone naughty sent invalid JSON! :O');
            return;
        }
        controller.route(data, ws);
    });
});