var TwitterHandler =  (function () {
    function TwitterHandler (stream){
        this.stream = stream;
        this.terms = {};
        this.data = [];
        this.keys = Object.keys(this.terms);
        this.message = "";
        this.index = -1;
    }

    TwitterHandler.prototype.getParams = function(){
        return 'batman';
    };

    TwitterHandler.prototype.response = function(data){
        this.message += data;
        var payload = "", tweet;
        while((this.index = this.message.indexOf('\r')) > -1){
            payload = this.message.slice(0, this.index);
            this.message = this.message.slice(this.index + 2);
            tweet = JSON.parse(payload);
            if(tweet.text){

            }
        }
    };

    TwitterHandler.prototype.addTerm = function(){
        //Check if term exists
        //Add to Terms
        //Add to Regex String
    };

    TwitterHandler.prototype.removeTerm = function(){
        //Remove from Object
        //Recalc Keys
        //Remove from Regex String
    };

    return TwitterHandler;
})();

module.exports = TwitterHandler;