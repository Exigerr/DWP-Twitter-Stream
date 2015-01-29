var User =  (function () {
    function User (id, ws){
        this.id = id;
        this.ws = ws;
    }

    User.prototype.disconnect = function(){
        //TODO: Lost connection with client
    };


    return User;
})();

module.exports = User;