var App =  (function () {
    function App (){
        this.ws;
        this.termHandler = new TermHandler(this.ws);
        this.toTrackElem = document.getElementById('trackTerm');
    }

    App.prototype.start = function(){
        this.ws = new WebSocket('ws://localhost:1337');
        this.ws.onmessage = this.termHandler.response.bind(this);

        document.getElementById('addTerm').addEventListener('click', this.submitTerm.bind(this), false);
        document.getElementById('removeTerm').addEventListener('click', this.removeTerm.bind(this), false);
    };

    App.prototype.submitTerm = function(e){
        e.preventDefault();
        var val = this.toTrackElem.value;
        if(val !== ''){
            this.termHandler.addTerm(val.split(/[ ,]+/));
        }
    };

    App.prototype.removeTerm = function(e){
        e.preventDefault();
        this.termHandler.removeTerm();

    };

    return App;
})();


var TermHandler =  (function () {
    function TermHandler (ws){
        this.ws = ws;
        this.isActive = false;
        this.listElem = document.getElementById('termWrapper');
        this.listElem.style.display = 'block';
    }

    TermHandler.prototype.registerEvents = function(){

    };

    TermHandler.prototype.addTerm = function(){
        //Check if term exists in array.

        //Add term to list
        if(this.isActive === false){
            this.isActive = true;
            this.toggleVisibility();
        }
        //Send term to server
    };

    TermHandler.prototype.removeTerm = function(){
        //Check if term exists
        //Remove term from list
        //Send signal to server to stop tracking
    };

    TermHandler.prototype.response = function(obj){
        var data = JSON.parse(obj);
        //Sort
        //Update List - Array Splice?
    };

    TermHandler.prototype.toggleVisibility = function(){
        if(this.isActive === true){
            translateElem(this.listElem, 0,0);
        }
        else {
            translateElem(this.listElem, 100,0);
        }
    };

    return TermHandler;
})();


