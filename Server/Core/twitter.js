var OAuth = require('oauth');

var TwitterHandler =  (function () {
    function TwitterHandler (config, type){
        this.connection = new OAuth.OAuth(
            'https://api.twitter.com/oauth/request_token',
            'https://api.twitter.com/oauth/access_token',
            config.consumerKey,
            config.consumerToken,
            '1.0A',
            null,
            'HMAC-SHA1'
        );
        this.url = 'https://stream.twitter.com/1.1/statuses/'+type+'.json';
    }

    TwitterHandler.prototype.stream = function(){

    };


    return TwitterHandler;
})();

module.exports = TwitterHandler;