
var Controller =  (function () {
    function Controller (config, type){
        this.ids = 0;
        this.users = {};
    }

    Controller.prototype.route = function(obj, ws){
        if(this.userExists(obj.id, obj.key) && typeof obj.terms !== 'undefined'){           //Validates user connecting exists

        }
        else if(typeof obj.newUser !== 'undefined'){    //If not, create a new user
            this.createUser(ws);
        }
    };

    Controller.prototype.userExists = function(id, key){
        var user = this.users[id];
        if(typeof user === 'undefined'){
            return false;
        }
        else if(user.key === key){
            return true;
        }
        return false;
    };

    Controller.prototype.createUser = function(ws){
        var user = new User(this.ids, ws);
        this.users[this.ids] = user;
        ws.on('close', this.users[this.ids].disconnect.bind(this));     //Assigns callback if client disconnects
        this.ids++;

        var userData = {
            id: user.id,
            key: user.key
        };
        ws.send(JSON.stringify(userData));
    };

    return Controller;
})();

module.exports = Controller;