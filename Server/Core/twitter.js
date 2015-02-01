var OAuth = require('oauth');

var TwitterStream =  (function () {
    function TwitterStream (config, type){
        this.config = config;
        this.connection = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            this.config.consumerKey,
            this.config.consumerToken,
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        this.request = null;
        this.url = 'https://stream.twitter.com/1.1/statuses/'+type+'.json';
    }

    TwitterStream.prototype.start = function(params, callback){
        this.request = this.connection.get(
            this.url+'?track='+ params,
            this.config.token,
            this.config.secret
        );
        this.request.on('response', function(response){
            response.setEncoding("utf8");
            response.on("data", callback);
            response.on("end", function () {
                console.log("---  STREAM ENDED  ---");
            });
        });
        this.request.end();
        setTimeout(this.stop.bind(this), 5000);
    };

    TwitterStream.prototype.stop = function(){
        console.log('---  PREPARE TO STOP!  ---');
        this.request.abort();
    };


    return TwitterStream;
})();

module.exports = TwitterStream;